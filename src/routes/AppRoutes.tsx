import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ForbiddenPage } from "../pages/ForbiddenPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayout } from "../layouts/AdminLayout";
import { AdminPage } from "../pages/AdminPage";
import { FiiCheckPage } from "../pages/FiiCheck/FiiCheckPage";

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
        <Route index element={<AdminPage />} />
        <Route path="/fii-check" element={<FiiCheckPage />} />
      </Route>
    </Routes>
  );
};
