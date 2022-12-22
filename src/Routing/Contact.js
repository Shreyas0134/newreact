import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>

      <button
        className="btn btn-info"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to layout
      </button>
      <ul>
        <li>
          <Link to="/">Go back</Link>
          <Outlet />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
