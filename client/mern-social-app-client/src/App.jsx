import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [token, setToken] = useState(null); // To store the authentication token

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <Routes>
            {/* If the user is logged in, they will be redirected to the PostPage */}
            <Route
              path="/"
              element={token ? <Navigate to="/posts" /> : <SignupForm />}
            />
            {/* Route to the login page */}
            <Route path="/login" element={<LoginForm setToken={setToken} />} />
            {/* Route to the post creation page */}
            <Route
              path="/posts"
              element={
                token ? <PostPage token={token} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Create a PostPage component to display posts and allow post creation
const PostPage = ({ token }) => {
  const [message, setMessage] = useState("");

  const refreshPosts = () => {
    setMessage("Post added successfully!");
  };

  return (
    <div>
      <PostForm token={token} refreshPosts={refreshPosts} />
      <PostList token={token} />
    </div>
  );
};

export default App;
