import { LoginPage } from "./pages/LoginPage";
import { ForbiddenPage } from "./pages/ForbiddenPage";
import { AdminPage } from "./pages/AdminPage";
import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from "./hooks/useAuth";

export const App = () => {
  const { status } = useAuth();

  if (status === "loading") return <p>Carregando…</p>;
  if (status === "unauthenticated") return <LoginPage />;
  if (status === "forbidden") return <ForbiddenPage />;

  return <AdminPage />;
};
