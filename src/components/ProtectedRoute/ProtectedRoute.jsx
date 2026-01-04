import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(GlobalContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
