// import React from "react";
// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <h1>Layout</h1>
//       <button className="btn btn-secondary">THis is layout component</button>
//       <div>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//             <Outlet />
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//             <Outlet />
//           </li>
          
       
      
//           <li>
//             <Link to="/notfound">No page found</Link>
//           </li>
//           </ul>
        
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {

        const navigate = useNavigate()
    
    
    return (
        <div>
            
              <h1>=====Layout====</h1>
               <button  className='btn btn-primary'  onClick={()=>{navigate('/home')}}>Click ME to Go Home...</button>
               <button className='btn btn-info'  onClick={()=>{navigate('/contact')}}>Click ME to Go contact...</button>
               <button className='btn btn-warning'  onClick={()=>{navigate('/nopage')}}>Click ME to Go nopage...</button>

        </div>
    )
}
export default Layout;
