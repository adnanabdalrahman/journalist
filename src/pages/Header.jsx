import { NavLink } from "react-router-dom";

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

  const login = true;
  return (
    <header style={styleHeader} className="nav-links ">
      <div className="logo">MySite</div>
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

      {!login && (
        <div style={styleAuth}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}

      {login && (
        <div style={styleAuth}>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
