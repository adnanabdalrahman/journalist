import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerUser(formData);

    if (res.message === "user created successfully") {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="name" onChange={handleChange} />

      <input name="email" placeholder="email" onChange={handleChange} />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}
