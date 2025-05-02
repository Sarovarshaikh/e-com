import { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://i.pravatar.cc/150",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(form);
    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Signup;
