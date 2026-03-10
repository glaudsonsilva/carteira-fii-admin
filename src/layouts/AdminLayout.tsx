import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AdminLayout = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="layout">
      <header className="header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className="logo">Carteira FII Admin</div>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="body">
        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li onClick={() => setMenuOpen(false)}>
                <a href="/">Dashboard</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/fii-check">Verificar FII</Link>
              </li>
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
