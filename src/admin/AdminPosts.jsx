import "../assets/style/posts.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          throw new Error("somtehing went wrong");
        }
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
              <Link to={`/posts/${post.id}`} className="read-more">
                Edit
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdminPosts;
