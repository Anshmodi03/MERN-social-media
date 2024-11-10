const Post = require("../models/Post");
const jwt = require("jsonwebtoken");

exports.createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = new Post({ content, author: req.user.userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getPosts = async (req, res) => {
  try {
    console.log("Fetching posts...");

    // Extract the token from the Authorization header
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }

    // Verify the token and decode it to get user data
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log the decoded token and user ID for debugging
    console.log("Decoded Token: ", decoded);

    // Fetch posts for the user using their ID
    const posts = await Post.find({ author: decoded.userId }).populate(
      "author",
      "username"
    );

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching posts" });
  }
};
