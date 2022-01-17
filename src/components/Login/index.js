import React from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import './Login.css'
import { Button, TextBtn } from '../Toolbar/styles';
 
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
     <div className="">
       <div className="login-box">
         <div className="">
           <div className="col-8 "></div>
           <form onSubmit={handleSubmit(onSubmit)} className="input-field">
             
             <input
               type="email"
               className={
                 errors.name ? "form-control is invalid" : "form-control"
               }
               style={{ marginTop: '4rem' }}
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
               style={{ marginBottom: '4rem' }}
               placeholder="Password"
               {...register("password", { required: true })}
             />
             {errors.password && <div>Password is required</div>}
             
           
             <Button onClick={Login} className="btn rounded-pill login-button"  >
                <TextBtn>LOGIN</TextBtn>
             </Button>
              
           </form>
 
           <div className="login-text">
           </div>

         </div>
       </div>
       <br/>
       <h5>Don't have an account? Sign Up</h5>
     </div>





   );
 };
 
 export default Login;
