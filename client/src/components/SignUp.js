
import React from "react";  
import{ useState } from "react";

function SignUp() {
    
    const [User, setUser] = useState({
        name : "" ,
        email : "" ,
        phone : "" ,
        password : "" ,
    });  
   // const [name, setName] = useState("asdd");
    let fieldName , value;
    const handleInputChange = (e) => {
      //  console.log('input',e.target.value);
      //  setName(e.target.value);
      fieldName= e.target.name;
      value=e.target.value;
      setUser({...User, [fieldName]:value });
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
       // console.log('Trying to Submit');
       const {name, email, phone , password} = User;
       const res = await fetch('/register' , {
           method : "POST",
           headers :{
             "Content-Type" : "application/json",
           },
           body : JSON.stringify({name , email,phone , password}),
       });
        const json = await res.json();
        console.log('res', res);
        if( res.status === 200 ){
           window.alert('User created successfully');
        }else{
            window.alert('Opps error'); 
        }
     };

  return (
    <div className="p-4 SignUp">
                <form className=" container col-10">
                <h3 className="p-3">Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" name='name' value={User.name} onChange={handleInputChange}   />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email"  value ={User.email} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" type=" text" className="form-control" placeholder="Enter phone" value ={User.phone} onChange={handleInputChange}/>
                </div>

                <div className="form-group pb-4">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password"value={User.password} onChange={handleInputChange} />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
      
     </div>
  );
}


export default SignUp;