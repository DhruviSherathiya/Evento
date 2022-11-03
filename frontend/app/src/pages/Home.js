import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;