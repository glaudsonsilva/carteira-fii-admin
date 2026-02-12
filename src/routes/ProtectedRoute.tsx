import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";
import { AuthLoader } from "../components/AuthLoader";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { status } = useAuth();

  if (status === "loading") {
    return <AuthLoader />;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  if (status === "forbidden") {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};
