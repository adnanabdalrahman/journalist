import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../services/postServices";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    shortContent: "",
    content: "",
    url: "",
  });

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await getPost(postId);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadPost();
  }, [postId]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(postId, post);
    navigate("/admin/posts");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Update Post</h2>

          <form onSubmit={handleSubmit}>
            {post.url && (
              <div className="text-center mb-3">
                <img
                  src={post.url}
                  alt="Preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px" }}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                name="title"
                className="form-control"
                value={post.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Short Content</label>
              <input
                name="shortContent"
                className="form-control"
                placeholder="Enter Short Content"
                value={post.shortContent}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                name="content"
                rows="5"
                className="form-control"
                value={post.content}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                name="url"
                className="form-control"
                value={post.url}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary">
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
