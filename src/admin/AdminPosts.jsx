import "../assets/style/posts.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../services/postServices";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:3000/posts")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("somtehing went wrong");
  //       }
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => setPosts(data))
  //     .catch((error) => {
  //       console.log(error.message);
  //     })

  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you Sure, you want to delete this post",
    );

    if (!confirmDelete) return;
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((post) => post.id != id));
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  if (loading) return <h1>Loading . . . </h1>;
  if (posts.length === 0) return <h1>No Posts found . . . </h1>;
  return (
    <>
      <section className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.url} alt="Post image" />
            <div className="post-content">
              <h3>{post.title}</h3>
              <p>{post.shortContent}</p>
              <Link to={`${post.id}/edit`} className="read-more">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="delete-btn"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdminPosts;
