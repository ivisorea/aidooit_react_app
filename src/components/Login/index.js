

import React from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import './Login.css'
import { Button, TextBtn} from '../Toolbar/styles';
 
 export const Login = () => {
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
  const location = useLocation ()
  const from = location.state?.from?.pathname ||  '/protected';
  const {isAuthenticated, loading, signin} = useAuth ()
  const onSubmit = (formData) => signin(formData);
  if (loading) return 'Loading...';
  if (isAuthenticated) return <Navigate to={from} replace />;
 
 
  return (
    <div className="login-box" style={{ height: '30rem' , width: '25rem', paddingTop:'4rem', borderRadius:'20px'}}>
      <div className="col-8 "></div>
        <form onSubmit= {handleSubmit(onSubmit)}>
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
          </div>
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
             </div>
            <br/>
           
            <Button onClick={Login} className="login-button" className="btn rounded-pill login-button"> 
            <TextBtn>LOGIN</TextBtn> 
            </Button>
            
            </form>
          <div className="login-text">
            <h5>Don`t have an accountAlread? Sign Up</h5>
                  
           
          
            </div> 
            
       </div>
      
      


);
 };


export default Login;

