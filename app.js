const express = require('express');
const bodyParser = require('body-parser');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const mongoose = require('mongoose');
const app = express();
const Event = require('./models/event');
const isAuth = require('./middleware/is-auth');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

app.use(bodyParser.json());

app.use((req, res, next) => {
  // every host every client can send request
  res.setHeader('Access-Control-Allow-Origin', '*');
  // post,get and option request can be done
  // browser automatically do options request before do post request
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

app.get('/',(req,res,next) => {
    res.send('Hello World');
})

mongoose
.connect(`mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@evento.8lbhimd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });

