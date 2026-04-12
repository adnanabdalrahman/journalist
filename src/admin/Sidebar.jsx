import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/admin" end>
          Dashbard
        </NavLink>
        <NavLink to="/admin/posts" end>
          Posts
        </NavLink>
        <NavLink to="/admin/posts/new">Create Post</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
