import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

const server = express();

server.get("/graphql", (req, res) => {
    res.send(`<html><head><body>
                <h1>Hello World!</h1>
                </body></head></html>`) 
})

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql",
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({}))

server.listen(4000, () => {
    console.log("listening on port 4000")
})