import React from "react";
import '../login.css'
import photo from "./Tablet login-amico.svg";


const Login = () => {
  

  function validate() {
    let a = document.getElementById("form2Example1").value;
    let b = document.getElementById("form2Example2").value;
    let checkbox = document.querySelector('input[type="checkbox"]');
    
    if (a === "" || b === "" ) {
      alert("All fields are required");
    }

    else if  (!a.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/)) {
      alert("please enter valid email");
    
    }
    else if
      (!checkbox.checked) {
        alert("please check the checkbox");
      }
    
      else {
      alert("Form submitted successfully");
      window.location.href = "MainPage.js";
    }
  }
 
  

  return (
    
    <div>
      <div class="custom-shape-divider-top-1669901121">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
          </svg>
          </div>

        
        <ul class="nav justify-content-end" style={{position:'absolute',top:'2%',left:'5%'  }}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="login.js" style={{color:'black'}}>
             Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.js" style={{color:'black'}}>
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.js" style={{color:'black'}}>
            Sign up
            </a>
          </li>
          
        </ul>
        
     

      <div className="imgg">
        <img
          src={photo}
          alt="not found"
          style={{ width: "30%", height: "50%", marginLeft: "3%" }}
        />

        <form className="form">
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <label class="form-label"  >
              Email address
            </label>
            <input type="email" id="form2Example1"  class="form-control" />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <label class="form-label"  >
              Password
            </label>
            <input type="password" id="form2Example2"  class="form-control" />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" class="butn" onClick={validate}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
