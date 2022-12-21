import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <button className="btn btn-secondary">THis is layout component</button>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <Outlet />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <Outlet />
          </li>
          
       
      
          <li>
            <Link to="/notfound">No page found</Link>
          </li>
          </ul>
        
      </div>
    </div>
  );
};

export default Layout;
