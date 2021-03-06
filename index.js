const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');
const typeDefs  =require('./schema');
const models = require('./models'); 


// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', 
graphiqlExpress({ endpointURL: '/graphql' }));




app.get('/', (req,res)=>{
    res.send('Hello');
})

const PORT =5600;

models.sequelize.sync().then(()=>
    app.listen(PORT, ()=> 
                console.log(`serving is running on port ${PORT}`))
            );