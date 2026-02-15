import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout copy";
import Dashboard from "../admin/Dashboard";
import AdminPosts from "../admin/AdminPosts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="posts">
          <Route index element={<Posts />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="posts">
          <Route index element={<AdminPosts />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
