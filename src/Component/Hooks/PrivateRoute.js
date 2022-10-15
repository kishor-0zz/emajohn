
import { Navigate, useLocation } from 'react-router-dom';
import UseAuthh from '../Hooks/useAuth';
const PrivatRoute = ({ children }) => {
   const { data } = UseAuthh();
   let location = useLocation();

   if (!data.email) {
      return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
   }
   return children;
}
export default PrivatRoute;