export const AuthLoader = () => {
  return (
    <div className="auth-container">
      <div className="auth-card loader-card">
        <div className="spinner" />
        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Verificando acesso...
        </p>
      </div>
    </div>
  );
};
