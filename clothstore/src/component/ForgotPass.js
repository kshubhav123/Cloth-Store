import React from "react";
import { Link } from "react-router-dom";

const ForgotPass=()=> {
  return (
    <div>
<div className="container my-5">
        <div className="row my-4">
          <div className="col-3"></div>

          <div className="col-sm-6">
            <p className="h3 mb-4 my-3">Forgot Password</p>


              <input
                
                type="email"
                className="form-control mb-4"
                placeholder="Enter Your Email"
                
              />

              <input
                type="number"
                className="form-control mb-4"
                placeholder="Mobile Number"

              />

              <button className="btn btn-info my-4 btn-block" type="submit" >
                Get Password
              </button>

            <p>
              If Your Not Register ? <Link to="/register">Sign Up</Link>
            </p>          </div>

          <div className="col-3"></div>
        </div>
      </div>
      

    </div>
  );
}

export default ForgotPass;
