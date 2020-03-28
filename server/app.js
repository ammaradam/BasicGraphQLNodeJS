const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors())

// connect to mongodb database
mongoose.connect(
    'mongodb+srv://ammaradam:ammaradam123@cluster0-0dn41.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// use graphql as query language
app.use('/graphql', graphqlHTTP({
    schema,                  // or schema.schema
    graphiql: true
}))

app.listen(4000, () =>{
    console.log('now listening for requests on port 4000');
});