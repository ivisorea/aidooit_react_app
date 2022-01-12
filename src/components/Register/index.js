//import { useState } from 'react';
//import React from 'react';
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        "https://aidooit-app.herokuapp.com/user/singup",
        formData
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
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
