import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
//import React from 'react';
import "./Register.css";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { Button, TextBtn } from '../Toolbar/styles';


export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation ()
  const from = location.state?.from?.pathname ||  '/protected';
const {isAuthenticated, signup} = useAuth ()
 const onSubmit = (formData) => signup(formData);
 if (isAuthenticated) return <Navigate to={from} replace />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="login-box" style={{ height: '30rem' , width: '25rem', paddingTop:'4rem', borderRadius:'20px'}}>
      
      <div class="form-floating mb-3">
          <input
            type="text"
            className={
              errors.name ? "form-control is invalid" : "form-control"
            }
            style={{ marginBottom: '1rem' }}
            placeholder="First name"
            {...register("first_name", { required: true })}
          />
          <label for="floatingInput">First name</label>
          {errors.email && <div>First name is required</div>}
      
          <br />


      <div class="form-floating mb-3">
          <input
            type="text"
            className={
              errors.name ? "form-control is invalid" : "form-control"
            }
            style={{ marginBottom: '1rem' }}
            placeholder="Last name"
            {...register("last_name", { required: true })}
          />
          <label for="floatingInput">Last name</label>
          {errors.email && <div>Last name is required</div>}

          <br />

      <div class="form-floating mb-3">
          <input
            type="email"
            className={
              errors.name ? "form-control is invalid" : "form-control"
            }
            style={{ marginBottom: '1rem' }}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <label for="floatingInput">Email</label>
          {errors.email && <div>Email is required</div>}

          <br />

      <div class="form-floating">
        <input
          type="password"
          className={
            errors.name ? "form-control is invalid" : "form-control"
          }
          style={{ marginBottom: '1rem' }}
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <label for="floatingInput">Password</label>
        {errors.password && <div>Password is required</div>}
      <br/>
        <div className='register-button'>'  
        <Button onClick={Register} className="btn"> 
          <TextBtn>SIGN UP</TextBtn> 
        </Button>
      </div>
          
    <div className="login-text">
        <h5>Already have an account? Log In</h5>
    </div>
  </div>
</div>
</div>
</div>
</div>

</form>

);
};


export default Register;

