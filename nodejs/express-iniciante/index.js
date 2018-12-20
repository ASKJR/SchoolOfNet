const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/hello', (req, res) => {
    res.json({
        data: 'Hello route...'
    });
});

app.get('/hello/:name', (req, res) => {
    res.json({
        message: `My name is ${req.params.name}` 
    });
});

app.get('/html', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
    console.log('Im running at port 3000');
});