import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postServices";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    short_content: "",
    content: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("short_content", post.short_content);
    formData.append("content", post.content);

    if (image) {
      formData.append("image", image);
    }
    const token = localStorage.getItem("token");
    await createPost(formData, token);

    navigate("/admin/posts");
  };

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: "700px" }}>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title mb-4 text-center">Create New Post</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  className="form-control"
                  placeholder="Enter post title"
                  value={post.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Short Content</label>
                <input
                  name="short_content"
                  className="form-control"
                  placeholder="Enter Short Content"
                  value={post.short_content}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Content */}
              <div className="mb-3">
                <label className="form-label">Content</label>
                <textarea
                  name="content"
                  rows="5"
                  className="form-control"
                  placeholder="Write your post..."
                  value={post.content}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Image preview */}
              {image && (
                <div className="text-center mb-3">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              )}

              {/* Upload image */}
              <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
