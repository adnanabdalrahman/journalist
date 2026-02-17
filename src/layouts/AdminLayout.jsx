import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";
import "../assets/style/admin.css";
const AdminLayout = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
