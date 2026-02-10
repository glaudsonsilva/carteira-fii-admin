import { useNavigate } from "react-router-dom";

export const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Acesso negado</h2>
      <p>Você não tem permissão para acessar o admin.</p>
      <button
        onClick={() => {
          localStorage.removeItem("id_token");
          navigate("/login", { replace: true });
        }}
      >
        Voltar
      </button>
    </div>
  );
};
