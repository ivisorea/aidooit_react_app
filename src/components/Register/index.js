 //import { useState } from 'react';
 //import React from 'react';
 import "./Register.css";
 import {useForm} from 'react-hook-form';
 import axios from "axios";
 
export const Register = () => {
  const {
      register,
      handleSubmit,
      watch,
     //formState = {errors} 
   } = useForm ();
 
  const onSubmit = async data => {
      try { 
          const {data: {token} = await axios.post(
            "https://aidooit-app.herokuapp.com/singup", data);
          console.log(token);
      } 
      catch (error) {
     console.error(error);
   }
 };
 
    return (
      <div className="login">
        <div className="login-box">
          <div className="login-container">
            <div className="col-8"></div>
              <form onSubmit = {handleSubmit()} className="input-field" >
                  <input type="email" className={errors.name ? "form-control is invalid" : "form-control"} placeholder="Email" {...register ("email", {required: true})}/>
                  {errors.name && <div>Email is required</div>}
              </form>
 
              <br/>
              <form onSubmit = {handleSubmit()} className="input-field">
                  <input type="text" className={errors.name ? "form-control is invalid" : "form-control"} placeholder="Username" {...register ("name", {required: true})}/>
                  {errors.name && <div>Name is required</div>}
              </form>
              <br/>
              <form onSubmit = {handleSubmit()} className="input-field">
                  <input type="password" className={errors.name ? "form-control is invalid" : "form-control"} placeholder="Password" {...register ("password", {required: true})}/>
                  {errors.name && <div>Password is required</div>}
              </form>
              <form className="login-button">
                  <button onClick={SignUp} className="btn btn-primary" >Sign Up</button>
              </form>

              <div className="login-text">
                <h5>Already have an account? Log In</h5>
              </div>
            </div>
          </div>
        </div>
      );
    };



