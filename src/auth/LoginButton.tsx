import { GoogleLogin } from "@react-oauth/google";

export const LoginButton = () => {
  return (
    <GoogleLogin
      onSuccess={(res) => {
        console.log("ID Token:", res.credential);
        localStorage.setItem("id_token", res.credential!);
      }}
      onError={() => {
        console.log("Login failed");
      }}
    />
  );
};
