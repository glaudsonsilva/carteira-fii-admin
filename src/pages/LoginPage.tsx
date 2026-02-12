import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-title">Carteira FII Admin</div>

        <div className="auth-subtitle">
          Área restrita. Faça login para continuar.
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <GoogleLogin
            onSuccess={(res) => {
              localStorage.setItem("id_token", res.credential!);
              navigate("/", { replace: true });
            }}
            onError={() => {
              alert("Falha no login");
            }}
          />
        </div>
      </div>
    </div>
  );
};
