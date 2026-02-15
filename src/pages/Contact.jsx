import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const validateForm = (formData) => {
  const newErros = {};
  if (!formData.name) newErros.name = "Please fill your name!";
  if (!formData.email) newErros.email = "Please fill your email";
  if (!formData.message) newErros.message = "Please fill your message";

  return newErros;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErros = validateForm(formData);
    setErrors(validateErros);
    if (Object.keys(validateErros).length === 0) {
      console.log(formData);
      alert("Form Submitted successfuly");
      setFormData({
        name: "",
        email: "",
        telephone: "",
        message: "",
      });
    }
  };

  return (
    <>
      <h1>Welcome to My Contact</h1>
      <div
        className="container"
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "35px",
          borderRadius: "27px",
          width: "50%",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-medium">Name*</label>
            {errors.name && (
              <span style={{ paddingLeft: "6px", color: "rgb(249, 164, 2)" }}>
                {errors.name}
              </span>
            )}
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              className="form-control"
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-medium">Email*</label>
            {errors.email && (
              <span style={{ paddingLeft: "6px", color: "rgb(249, 164, 2)" }}>
                {errors.email}
              </span>
            )}
            <input
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="form-control"
              placeholder="email"
            />
          </div>

          {/* Telephone */}
          <div className="mb-3">
            <label className="form-label fw-medium">Telephone</label>
            <input
              onChange={handleChange}
              name="telephone"
              value={formData.telephone}
              className="form-control"
              placeholder="telephone"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="form-label fw-medium">Message *</label>

            {errors.message && (
              <span style={{ paddingLeft: "6px", color: "rgb(249, 164, 2)" }}>
                {errors.message}
              </span>
            )}
            <textarea
              onChange={handleChange}
              name="message"
              rows={4}
              value={formData.message}
              className="form-control"
              placeholder="Tell us how we can help..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              backgroundColor: "rgb(207, 149, 207)",
              color: "#640a64",
              border: "none",
            }}
            className="btn w-100 btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
