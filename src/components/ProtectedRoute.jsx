// ProtectedRoute.js — save where they were trying to go
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token');
  const location = useLocation();

  if (!isLoggedIn) {
    
    return (
      <Navigate
        to="/about"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;