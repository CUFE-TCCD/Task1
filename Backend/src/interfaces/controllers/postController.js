const { createPost, updatePost, deletePost } = require('../services/postService');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createPost = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { title, content, media } = req.body;

  if (!title || !content) {
    return next(new AppError("Title and content can't be empty", 400));
  }

  const post = await createPost(userId, title, content, media);
  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    post,
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const { title, content, media } = req.body;
  const postId = req.params.id;

  const post = await updatePost(postId, title, content, media);
  res.status(200).json({
    success: true,
    message: 'Post updated successfully',
    post,
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  await deletePost(postId);
  res.status(202).json({
    success: true,
    message: 'Post deleted successfully',
  });
});
