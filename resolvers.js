export default {
  Query: {
    getAllPosts: async (parentValue, args, { Post }) => {
      const posts = await Post.find();
      return posts;
    },
    postById: async (parentValue, args, { Post }) => {
      const post = await Post.findById(args);
      return post;
    }
  },
  Mutation: {
    createPost: async (parentValue, args, { Post }) => {
      const post = await new Post(args).save();
      return post;
    },
    clearAllPosts: async (parentValue, args, { Post }) => {
      return await Post.collection.remove({});
    },
    likePost: async (parentValue, args, { Post }) => {
      return await Post.findById(args).then(post => {
        ++post.likes;
        return post.save();
      });
    },
    addComment: async (parentValue, { _id, content }, { Post }) => {
      return await Post.findById(_id).then(post => {
        post.comments.unshift(content);
        return post.save();
      });
    }
  }
};
