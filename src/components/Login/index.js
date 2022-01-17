import React from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import "./Login.css";
 
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
     <div className="login">
       <div className="login-box">
         <div className="login-container">
           <div className="col-8"></div>
           <form onSubmit={handleSubmit(onSubmit)} className="input-field">
             
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
           
             <button onClick={Login} className="login-button"  >Log In</button>
              
           </form>
 
           <div className="login-text">
             <h5>Don't have an account? Sign Up</h5>
           </div>

         </div>
       </div>
     </div>





   );
 };
 
 export default Login;
