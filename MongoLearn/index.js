const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
        res.send('Get Request Received !')
});

app.post('/', (req, res) => {
    res.send('Post Request Received !')
});

app.put('/', (req, res) => {
    res.send('Put Request Received !')
});

app.delete('/', (req, res) => {
    res.send('Delete Request Received !')
});

app.listen(process.env.port || port, async() => {
    console.log(`Server Running On Port : ${port}`);
});