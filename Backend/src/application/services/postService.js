const Post = require("../models/PostSchema");
const { generateUUID } = require("../utils/generateUUID");

exports.createPost = async (userId, title, content, media) => {
  const post = await new Post({
    _id: generateUUID(),
    userId,
    title,
    content,
    media,
  }).save();
  return post;
};

exports.updatePost = async (postId, title, content, media) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  post.title = title;
  post.content = content;
  post.media = media;

  await post.save();
  return post;
};

exports.deletePost = async (postId) => {
  const post = await Post.findByIdAndDelete(postId);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};
