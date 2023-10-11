const express = require('express');

const app = express();

let user = 'James';

app.get('/', (req, res) => {
    res.send('Welcome to my server');   
})

app.get('/user', (req, res) => {
    res.send(user);
})

app.listen(2000, () => {
    console.log('Server is running...');
});