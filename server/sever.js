const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Message {
    id: ID!
    user: string!
    content: string!
}

type Query {
    messages: [Messages!]
}

type Mutation {
    postMessage(user: string!, content: string!): ID!
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

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => {
  console.log(`Server running on port ${port}`);
});
