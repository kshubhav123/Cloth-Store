import { Link } from "react-router-dom";

const Login=()=> {
  return (
    <div>
      <div className="container my-5">
        <div className="row my-4">
          <div className="col-3"></div>

          <div className="col-sm-6">
            <p className="h3 mb-4 my-3">Login</p>


              <input
                
                type="email"
                className="form-control mb-4"
                placeholder="Enter Your Email"
                
              />

              <input
                type="text"
                className="form-control mb-4"
                placeholder="Password"

              />

              <button className="btn btn-info my-4 btn-block" type="submit" >
                Login
              </button>

            <p>
              If Your Not Register ? <Link to="/register">Sign Up</Link>
            </p>
            <p>
              forgot Password ? <Link to="/forgotpass">forgot password</Link>
            </p>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Login;
