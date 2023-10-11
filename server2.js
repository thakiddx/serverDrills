const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>My server go to "/about" for more info</h1>')
});

server.get('/data', (req, res) => {
    res.send({joke: 'Knock knock', likes: 300})
});

server.get("/jokes", (req, res) => {
    res.send([
        {joke: "something funny", likes: 300},
        {joke: "something funny", likes: 300},
        {joke: "something funny", likes: 300},
        {joke: "something funny", likes: 300}
    ])
})


    server.listen(3000, () => {
    console.log('Server is running...');
});