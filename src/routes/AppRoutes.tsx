import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ForbiddenPage } from "../pages/ForbiddenPage";
import { AdminPage } from "../pages/AdminPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forbidden" element={<ForbiddenPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
