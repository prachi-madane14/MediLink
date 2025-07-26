import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")?.toLowerCase(); // normalize role

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Normalize allowed roles too
  const normalizedRoles = allowedRoles.map((r) => r.toLowerCase());

  if (!normalizedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
