const express = require('express');

const Cors = require('cors')

const app = express();

app.use(Cors({
    origin: '*'
}))

let myMessages = ['Hello', 'How are you?', 'I am fine, thank you!'];

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Server!<h1>')
});

app.get('/messages', (req, res) => {
    res.send(myMessages);
})

app.delete('/messages/last', (req, res) => {
    myMessages.pop();
    res.send('last message deleted');
})

app.delete('/messages/first', (req, res) => {
    myMessages.shift();
    res.send('first message deleted');
})

app.post('/messages/:messageContent', (req, res) => {
    myMessages.push(req.params.messageContent);
    res.send('message added');
})

app.listen(3000, () => {
    console.log('Server has started!');
});