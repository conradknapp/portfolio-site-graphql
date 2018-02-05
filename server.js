import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

mongoose.connect("mongodb://localhost/test");
mongoose.connection
  .once("open", () => console.log("Connected to Mongo"))
  .on("error", error => console.error(`Error connecting to Mongo ${error}`));

const Post = mongoose.model("Post", {
  title: String,
  content: String,
  imageUrl: String
});

const app = express();

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { Post } })
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
