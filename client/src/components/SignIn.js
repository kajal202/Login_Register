import React, { useState } from "react";
import { useLogin } from "../context/LoginContext";

function SignIn() {
    const [LoginDetails, setLoginDetails] = useState({
        email : "", 
        password : "",
    });
    const { handleLogin} = useLogin();
    let fieldName , value;
    const handleInputChange = (e) => {
      console.log(e.target.name);
      fieldName= e.target.name;
      value=e.target.value;
      setLoginDetails({...LoginDetails, [fieldName]:value })
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
      //  console.log('hello');
      await handleLogin(LoginDetails);
  };

    return (
            
      <div className="SignUp p-4">
          <div className="p-3  container col-10 bg-white ">
            <form className="p-2">
                <h3 className="p-2 ">Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" value={LoginDetails.email} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" value={LoginDetails.password} onChange={handleInputChange}  />
                </div>

                <div className="form-group pt-4">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"  />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="./SignIn.js">password?</a>
                </p>
            </form>     
    </div>
    </div>
  );
}

export default SignIn;