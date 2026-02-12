import { useNavigate } from "react-router-dom";

export const ForbiddenPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-title">Acesso negado</div>

        <div className="auth-subtitle">
          Sua conta não tem permissão para acessar o admin.
        </div>

        <button className="primary-button" onClick={handleLogout}>
          Entrar com outra conta
        </button>
      </div>
    </div>
  );
};
