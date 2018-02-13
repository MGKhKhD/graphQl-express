const typeDefs = `

    type Item {
        id: String!
        item: String!
        creator: User!
    }

    type List {
        id: String!
        title: String!
        items: [Item!]!
        owner: String!
    }

    type User {
        id: String!
        username: String!
        createdAt: String!
        updatedAt: String!
        lists: [List!]!
        items: [Item!]!
    }

    type Query {
        allUsers: [User!]!
        getUser(username: String!): User
        userLists(owner: String!): [List!]!
        userItems(creatorId: String!): [Item!]!
    }

    type Mutation {
        createUser(username: String!): User
        updateUser(username: String!, newUsername: String!): [Int!]!
        deleteUser(username: String!): Int!

        createList(owner: String!, title: String!): List!
        createItem(creatorId: String!, ListId: String!, item: String!): Item!
    }
  `;

module.exports = typeDefs;