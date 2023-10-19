import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const { createContext, useContext, useState, } =require("react");

 export const LoginContext = createContext();
/*to give values to logincontext*/
export  const LoginProvider = ({children}) => {
    const [Login , setLogin] = useState(false);
    const navigate= useNavigate();
  const handleLogout =async () => {
   try{
   const res = await fetch("/logout" , {
           method : "GET",
           headers :{
             "Content-Type" : "application/json",
          },
    });
    const json = await res.json();
    setLogin(false);
    navigate("/signin");
    window.alert("User Logged Out");
    console.log(json);
    }catch (err){
       window.alert("Opps ! error occured");
    }
  };

  const  handleLogin= async (LoginDetails) =>{
    const {email, password} = LoginDetails;
    const res = await fetch('/login', {
      method : "POST",
      headers :{
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({email , password}),
    });
    const json = await res.json();
    //  console.log('res', res);
    if(res.status === 200 ){
      setLogin(true);   
   // window.alert('User logined successfully');
    
    navigate('/learn');
    }else{
         window.alert('Invalid credentials'); 
    }
  };
        
    return (
       <LoginContext.Provider value ={{Login, handleLogout, handleLogin}}>
           {children}
       </LoginContext.Provider>
    );
};

 export const useLogin = () => {
     return useContext(LoginContext);
 };

