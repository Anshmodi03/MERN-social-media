import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // React Router's useNavigate hook to handle redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ansh-mern-social-media.vercel.app/api/auth/login",
        { email, password }
      );
      setMessage("Login successful!");
      setToken(response.data.token); // Save the token to the state
      navigate("/posts"); // Redirect to the post page
    } catch (error) {
      setMessage("Error: " + error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Login
        </h2>
        <div>
          <label htmlFor="email" className="text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
        <p className="mt-3 text-center text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/")} // Navigate to the signup page
            className="text-indigo-600 cursor-pointer hover:text-indigo-700"
          >
            Sign up here
          </span>
        </p>
        <p className="mt-3 text-center text-red-500">{message}</p>
      </form>
    </div>
  );
};

export default LoginForm;
