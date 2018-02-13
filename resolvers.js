const resolvers = {

    User: {
        lists: (parent, args, {models}) =>models.List.findAll({where: {owner: parent.id}}) ,
        items: (parent, args, {models}) => models.Item.findAll({where: {creatorId: parent.id}})
    },

    List: {
        items: (parent,args, {models})=> models.Item.findAll({where: {ListId: parent.id}})
    },

    Item: {
        creator: (parent, args, {models}) => models.User.findOne({ where: {id: parent.creatorId}})
    },

    Query: {
        allUsers: (parent, args, {models}) => models.User.findAll(),
        getUser: (parent, args, {models}) => models.User.findOne( {where: {
            username: args.username
        }}),
        userLists: (parent, {owner}, {models}) => models.List.findAll({where:{owner}}),
        userItems: (parent, {creatorId} , {models}) => models.Item.findAll({where: {creatorId}})
    },

    Mutation: {
        createUser: (parent, args, {models}) => models.User.create(args),
        updateUser: (parent, {username, newUsername}, {models}) => models.User.update({username: newUsername}, 
            {where: {username}}),
        deleteUser: (parent, args, {models}) => models.User.destroy({where: args}),
        createList: (parent, args, {models}) => models.List.create(args),
        createItem: (parent, args, {models}) => models.Item.create(args)
    }
  };

module.exports = resolvers;