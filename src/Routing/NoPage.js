import React from "react";
import { Outlet, Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      NoPage
      <button>This is nopage component</button>
      <ul>
        <li>
          <Link to="/">Go back</Link>
          <Outlet />
        </li>
      </ul>
    </div>
  );
};

export default NoPage;
