const resolvers = {
    Query: {
        allUsers: (parent, args, {models}) => models.User.findAll(),
        getUser: (parent, args, {models}) => models.User.findOne( {where: {
            username: args.username
        }})
    },

    Mutation: {
        createUser: (parent, args, {models}) => models.User.create(args),
        updateUser: (parent, {username, newUsername}, {models}) => models.User.update({username: newUsername}, 
            {where: {username}}),
        deleteUser: (parent, args, {models}) => models.User.destroy({where: args})
    }
  };

module.exports = resolvers;