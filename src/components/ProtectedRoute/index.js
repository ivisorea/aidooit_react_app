 import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import  AuthContext, { useAuth }  from '../../context/AuthContext';


const ProtectedRoute = () => {
 const {isAuthenticated} = useAuth ();
 return isAuthenticated ? <Outlet/> : <Navigate to= '/login'/>;
};


export default ProtectedRoute;