import { useEffect, useState } from "react";
import React from "react";
function Learn() {

  const [user, setUser] = useState("Loading");
    const getSecretData= async () => {
         const res = await fetch('/Learn',{
            method : "GET",
            headers : {
              'content-type' : 'application/json',
              Accept : "application/json",
            },
            credentials : "include",
         });
         const json = await  res.json();
       //  console.log(json);
       setUser(json);
       
    };

     useEffect( ()=>{
         getSecretData();
     },[]);

    return (
        <div className="home">
           {
        user ==='Loading' ? <h1>Loading</h1>: <h1>{user.name}</h1>
      }
      
       </div>
    );
  }
  
  
  export default Learn;