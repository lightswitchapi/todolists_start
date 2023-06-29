import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";

const ProtectedRoute = ({ children }) => {
    let auth = useAuth()

  if (!auth.validateToken()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
