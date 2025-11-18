import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";


export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={"/login"} ></Navigate>
  );
}