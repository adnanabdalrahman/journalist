import { useParams } from "react-router-dom";
import "../assets/style/postdetails.css";
import { useState, useEffect } from "react";
import { getPost } from "../services/postServices";
const PostDetails = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(params.postId);
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
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
