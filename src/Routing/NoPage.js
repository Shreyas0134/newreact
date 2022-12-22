import React from "react";
import { Outlet, Link , useNavigate} from "react-router-dom";


const NoPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>=========NoPage======</h1>
      <button className="btn btn-danger" onClick={()=>{navigate('/')}}>Go back to home page</button>
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
