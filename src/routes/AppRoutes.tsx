import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ForbiddenPage } from "../pages/ForbiddenPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayout } from "../layouts/AdminLayout";
import { AdminPage } from "../pages/AdminPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};
