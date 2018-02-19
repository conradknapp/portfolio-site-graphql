export default `

type Post {
  _id: String!
  title: String!
  imageUrl: String!
  content: String!
  likes: Int!
  comments: [String]
}

type Query {
  getAllPosts: [Post]!
  postById(_id: String!): Post!
}

type Mutation {
  createPost(title: String! imageUrl: String! content: String!): Post!
  clearAllPosts: Post
  likePost(_id: String!): Post!
  addComment(_id: String! content: String!): Post!
}
`;
