import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Admin</h2>
      <p>Você está logado ✅</p>

      <button
        onClick={() => {
          localStorage.removeItem("id_token");
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </button>
    </div>
  );
};
