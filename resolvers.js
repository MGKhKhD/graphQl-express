const resolvers = {
    Query: {
        hello: (parent, args, {models}) => "hi"
    },
  };

module.exports = resolvers;