import { Link, Outlet, useNavigate } from "react-router-dom";

export const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">Carteira FII Admin</div>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="body">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>
                <Link to="/fii-check">Verificar FII</Link>
              </li>
              <li>Configurações</li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
