import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
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
  );
};
