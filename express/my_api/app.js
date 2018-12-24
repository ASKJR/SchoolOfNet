const express    = require('express');
const app        = express();
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
mongoose.connect('mongodb://localhost/my_api');


//midlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors({
//     origin: 
// }));

//database
const mongoDb = mongoose.connection;

mongoDb.once('open', () => {
    console.log('Successfuly connected to mongoDb');
});

mongoDb.on('error', console.error.bind(console, 'connection error'));

//add routes
require('./routes')(app);



app.listen(3000, () => {
    console.log('Im listening port 3000');
})