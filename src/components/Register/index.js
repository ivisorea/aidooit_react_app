import React from 'react'
import { Navigate } from 'react-router-dom';
//import React from 'react';
import "./Register.css";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';


export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const {isAuthenticated, signup} = useAuth ()
 const onSubmit = (formData) => signup(formData);
 if (isAuthenticated) return <Navigate to='/protected'/>;

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-container">
          <div className="col-8"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="input-field">
            <input
              type="text"
              className={
                errors.name ? "form-control is invalid" : "form-control"
              }
              placeholder="First name"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && <div>First name is required</div>}
            <br />
            <input
              type="text"
              className={
                errors.name ? "form-control is invalid" : "form-control"
              }
              placeholder="Last name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && <div>Last name is required</div>}
            <br />
            <input
              type="email"
              className={
                errors.name ? "form-control is invalid" : "form-control"
              }
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <div>Email is required</div>}

            <br />
            <input
              type="password"
              className={
                errors.name ? "form-control is invalid" : "form-control"
              }
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <div>Password is required</div>}
            <br/>
           
           <button onClick={Register} className="login-button"  >Sign Up</button>
          </form>

          <div className="login-text">
            <h5>Already have an account? Log In</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
