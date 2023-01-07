import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const saveUser=()=> {
 
    let data = { name, email, mobile, password };

    fetch("http://localhost:3000/Userdata", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
}





  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-sm-6">
            <p className="h3 mb-4">Register</p>

              <input
                
                type="text"
                className="form-control mb-4"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <input
                
                type="email"
                className="form-control mb-4"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="number"
                className="form-control mb-4"
                placeholder="Mobile number"
                name="number"
                minLength="10"
                maxLength="11"
                
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Passwor"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="btn btn-info my-4 btn-block" type="submit" onClick={saveUser}>
                Register
              </button>

            <p>
              Already have Account ? <Link to="/login">Sign in</Link>
            </p>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
