import { useState } from "react";
import { loginUser } from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    const data = await loginUser(formData);
    //todo late after Context
    login(data);

    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}
