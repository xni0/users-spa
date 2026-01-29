import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authorized, render child routes (Outlet)
  return <Outlet />;
}

export default PrivateRoute;