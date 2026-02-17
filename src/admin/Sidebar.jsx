import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>

      <nav>
        <NavLink to="/admin">Dashbard</NavLink>
        <NavLink to="/admin/posts">Posts</NavLink>
        <NavLink to="/admin/posts/new">Create Post</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
