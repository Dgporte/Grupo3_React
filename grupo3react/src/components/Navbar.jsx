import "./navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (loggedUser) {
            setUser(loggedUser);
        }
    }, []);
        
        const handleLogout = () => {
            localStorage.removeItem("user");
            setUser(null);
            window.location.href = "/login";
        }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="imagenb">
          <img src="src/img/logo10.png" alt="" />
        </div>
        <ul className="navbar-links">
        <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Produto" className="navbar-link">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/Carrinho" className="navbar-link">
              Carrinho
            </Link>
          </li>
          {user ? (
          <li>
            <div className="user-profile">
              <button onClick={handleLogout}>Logout</button>
              <img src={user.imgurl || "./src/assets/fotousuariosemfundo.png"} alt="Foto do usuário" className="profile-img" />
            </div>
          </li>
        ) : (
          <li>
            <Link to="/Login" className="navbar-link">
              Login
            </Link>
          </li>
        )}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;