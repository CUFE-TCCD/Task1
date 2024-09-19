class Post {
  constructor(id, userId, title, content, media) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.media = media;
  }

  addMedia(mediaItem) {
    this.media = this.media || [];
    this.media.push(mediaItem);
  }
}

module.exports = Post;
