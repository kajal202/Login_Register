import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  
  return (
    <div className="PageNotFound">
     <h1> PageNotFound</h1>
     <Link to ='/home' >Go Back To Home</Link>
     </div>
  );
}


export default PageNotFound;