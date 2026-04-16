import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
  const styleHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "purple",
  };

  const styleUl = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
  };

  const styleAuth = {
    display: "flex",
    gap: "15px",
  };

  const { user, logout } = useAuth();

  return (
    <header style={styleHeader} className="nav-links ">
      <div className="logo">Journal</div>
      <nav>
        <ul style={styleUl}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {!user ? (
        <div style={styleAuth}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      ) : (
        <div style={styleAuth}>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
