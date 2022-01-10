import { Link} from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';

const ProtectedRoute = () => {
const isAuthenticated = true;
return isAuthenticated ? <IonRouterOutlet/> : <Link to= '/login'/>;
};

export default ProtectedRoute;