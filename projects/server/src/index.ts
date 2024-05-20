import * as dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// TODO: make this an env variable
const port = 3000;

// TODO: make this an env variable
const SPA_DIRECTORY = "../../frontend/dist/das-frontend";

dotenv.config();

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter",
    author: "J.K.Rowling"
  },
  {
    title: "The Lord of the Ring",
    author: "J.R.R. Tolkin"
  }
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: {
    port: port
  }
});

console.log(`🚀 Application starting at ${url}`);
