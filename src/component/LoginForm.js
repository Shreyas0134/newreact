import React from "react";
import './S.css';

const LoginForm = () => {
return(
     <div>
           <div className="Lgnform">
                <h1>LoginForm</h1>
                <form>
                <lable>Username:<br></br><input type="text" placeholder="Enter your name" className="form-control" /></lable>
                <lable>Password:<br></br><input type="password" placeholder="Enter your password" className="form-control"/></lable>
                
                <a href='#'>Register</a>
                <input type="submit" className="btn" value="Login" />
                
               
                    </form>
                 </div>
                 
                
     </div>          

           
);
}

export default LoginForm;