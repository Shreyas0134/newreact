import React from "react";
import { Outlet,Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button className="btn btn-primary" onClick={()=>{navigate('/')}}>This is home button</button><br></br>
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
