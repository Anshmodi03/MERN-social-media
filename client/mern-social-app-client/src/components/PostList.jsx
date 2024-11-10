import { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://ansh-mern-social-media.vercel.app/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
    } catch (error) {
      setErrorMessage("Error fetching posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [token]);

  return (
    <div className="space-y-4">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{post.author.username}</h3>
            <p className="text-gray-700 mt-2">{post.content}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
