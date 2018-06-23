import express from 'express';
const server = express();

server.get("/graphql", (req, res) => {
    res.send(`<html><head><body>
                <h1>Hello World!</h1>
                </body></head></html>`) 
})

server.listen(4000, () => {
    console.log("listening on port 4000")
})