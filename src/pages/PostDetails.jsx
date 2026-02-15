import { useParams } from "react-router-dom";
import "../assets/style/postdetails.css";
import { useState, useEffect } from "react";
const PostDetails = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/posts/${params.postId}`,
        );
        if (!response.ok) {
          throw new Error("somtehing wen wrong");
        }
        const result = await response.json();
        setPost(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [params.postId]);
  if (loading) return <h1>Loading . . . </h1>;
  if (!post) return <h1>No Post found . . . </h1>;
  return (
    <>
      <img src={post.url} alt="Post banner" className="post-image" />
      <div className="post-body">
        <h1 className="post-title">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default PostDetails;
