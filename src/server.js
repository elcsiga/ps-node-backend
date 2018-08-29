const express = require('express');
const graphql = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphql({
        schema: schema,
        graphiql: true
    })
);

const port = 3000;
console.log(`Listening on ${port}`)
app.listen(port);
