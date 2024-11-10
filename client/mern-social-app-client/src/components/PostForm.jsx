import { useState } from "react";
import axios from "axios";

const PostForm = ({ token, refreshPosts }) => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ansh-mern-social-media.vercel.app/api/posts",
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Post created successfully!");
      refreshPosts();
    } catch (error) {
      setMessage("Error: " + error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Create Post
        </h2>
        <div>
          <label htmlFor="content" className="text-gray-700 font-semibold">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Create Post
        </button>
        <p className="mt-3 text-center text-red-500">{message}</p>
      </form>
    </div>
  );
};

export default PostForm;
