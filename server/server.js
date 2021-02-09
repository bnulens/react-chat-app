const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Message {
    id: ID!
    user: String!
    content: String!
}

type Query {
    messages: [Message!]
}

type Mutation {
    postMessage(user: String!, content: String!): ID!
}
`;

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: () => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      return id;
    },
  },
};

const startServer = async () => {
  try {
    const server = new GraphQLServer({ typeDefs, resolvers });
    const port = process.env.port || 5000;

    server.start(({ port }) => {
      console.log(`\u26A1 Running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
