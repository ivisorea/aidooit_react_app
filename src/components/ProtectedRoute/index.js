 import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import  AuthContext, { useAuth }  from '../../context/AuthContext';


const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth ();
    const location = useLocation();
    
    return isAuthenticated ? <Outlet/> : <Navigate to= '/login' state={{ from: location }}/>;
};


export default ProtectedRoute;