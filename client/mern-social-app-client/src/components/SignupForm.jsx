import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );
      setMessage("User registered successfully!");
    } catch (error) {
      setMessage("Error: " + error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Sign Up
        </h2>
        <div>
          <label htmlFor="username" className="text-gray-700 font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
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
          Sign Up
        </button>
        <p className="mt-3 text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")} // Navigate to login page
            className="text-indigo-600 cursor-pointer hover:text-indigo-700"
          >
            Login here
          </span>
        </p>
        <p className="mt-3 text-center text-red-500">{message}</p>
      </form>
    </div>
  );
};

export default SignupForm;
