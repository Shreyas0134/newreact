import React from "react";
import { Outlet,Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button className="btn btn-primary">This is home button</button>
      <a><Link to ="/">Home</Link></a>
      <ul>
    <li>
      <Link to='/' >Go back</Link>
    </li>
  </ul>

      <Outlet/>
      <Outlet/>
    </div>
  );
};

export default Home;
