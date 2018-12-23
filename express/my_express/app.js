const express = require('express');
const app = express();
const http = require('http');
const router = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

//when you want to rename default view folder.
//app.set('views', 'views_dir');

app.set('view engine', 'pug');


//middleware master lvl
app.use((req, res, next) => {
    req.hidden = 'EUHEHUEHUEHHEHEHUE BRBR';
    console.log('Im a middleware master lvl');
    next();
});


app.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello world. FROM PUG ENGINE TEMPLATE...'
    })
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/hello', router);

app.use('/public', express.static(path.join(__dirname,'public')));


// http.createServer(app).listen(3000, () => {
//     console.log('http required');
// });



///MIDDLEWARE de ERRO vai ao final de todas as rotas
app.use((err, req, res, next) => {
    res.status(500)
        .json({
            msg: 'Whoops something went wrong!!! Call ADMIN ASAP'
        })
})

app.listen(3000, () => {
    console.log('Im listening to port 3000');
});