import React from "react";
import { Outlet,Link } from "react-router-dom"

const Contact = () => {
  return (
  <div>Contact
  
  <button>Thi sis contact button</button>
  <ul>
    <li>
      <Link to='/' >Go back</Link>
      <Outlet/> 
    </li>
  </ul>
  
  </div>
  )
}

export default Contact;
