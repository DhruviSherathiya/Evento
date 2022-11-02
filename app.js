const express = require('express');
const bodyParser = require('body-parser');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();
const events = [];
app.use(bodyParser.json());

app.use (
    '/graphql', 
    graphqlHTTP({
        schema : buildSchema(`
            
            
            type RootQuery {
                events: [String!]!
            }
            type RootMutation {
                createEvent(name: String): String
            }
            schema {
                query: RootQuery
                mutation: RootMutation
            }
    `),
    rootValue : {
        events: () => {
            return ['Dhruvi'];
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        } 
    },
    graphiql: true,
    })
);

app.get('/',(req,res,next) => {
    res.send('Hello World');
})

app.listen(8000);
