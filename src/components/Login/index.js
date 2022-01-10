 import React, { useState, useEffect } from "react";
 import * as ReactBootStrap from "react-bootstrap";
 import { Redirect } from "react-router-dom";
 import Layout from "./Layout"

 import "./Login.css";
 
  
export const Login = () =>{
         const [username, setUsername] = useState("");
         const [loginMsg, setLoginMsg] = useState("");
         const [email, setEmail] = useState("");
         const [password, setPassword] = useState("");
 
 
 
        /* useEffect(() => {
             if (localStorage.getItem("user-info")) {
               //history.push ("/add")
             }
           }, []);
         
           async function login() {
             // we are not creating new user, only logging-in.
             console.warn(username, email, password);
             let item=  { username, email, password };
             try {
               let result = await axios.get(
                 `https://avc-food-blog.herokuapp.com/api/users/${username}`
               );
               // authorization here ??
               setLoginMsg(`${username} is logged in!`);
               localStorage.setItem("user-info", JSON.stringify(result));
               console.log(result);
             } catch (error) {
               // "Invalid Login"
             }
     
      /* return (
             <div className='search-container'>
                 <form action='' className="ion-padding-top ion-justify-content-end">
                     <input type="text" placeholder="Email" onChange={(e) => setText(e.target.value)} />
                 </form>
                 <form action='' className="ion-padding-top ion-justify-content-end">
                     <input type="text" placeholder="Username" onChange={(e) => setText(e.target.value)} />
                 </form>
                 <form action='' className="ion-padding-top ion-justify-content-end">
                     <input type="text" placeholder="Password" onChange={(e) => setText(e.target.value)} />
                 </form>
             </div>
          
         
       );
     };
     */
 
     return (
 <>
   <Layout/>
 
 
         <div className="login">
      <div className="login-box">
           <div className="login-container">
             <div className="col-8"></div>
     
             {loginMsg ? (<div>{loginMsg}</div> ) : ( <>
               
             <form className="input-field" >
                 <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                   className="form-control"/>
              </form>
              <br/>
              <form className="input-field">
                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                   className="form-control"/>
                </form>
                <br/>
                <form className="login-button">
                 <button onClick={Login} className="btn btn-primary"  >Log In</button>
                 </form>
                 <div className="login-text"><h5>Need an account? Sign Up</h5></div>
               </>
             )}
            </div>
         </div>
        
 
         </div>
         </>
       );
 
 
       
           
     };   
        
 
      
       
 