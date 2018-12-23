const express = require('express');
const router = express.Router();

//middleware route lvl
router.use((req, res, next) => {
    console.log('Im a middleware of routes');
    next();
});

router.get('/', (req, res, next) => {
    
    next(new Error('Whoops'));
    // res.json({
    //     msg: 'Hello there'
    // });
});

router.get('/friend', (req, res) => {
    res.send('Hello friend');
});

//only a parameter is optional
router.get('/a?r', (req, res) => {
    res.send('a?r');
});

//aaaaaaaaaa it's ok.a = required r = required
router.get('/a+r', (req, res) => {
    res.send('a+r');
});
//anythin in the midle of a-r
router.get('/a*r', (req, res) => {
    res.send('a*r');
});


router.get('/params/:name/:age', (req, res) => {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers,
        port: req.port
    })
});


router.post('/bodyparser', (req, res) => {
    res.send(req.body);
});

router.get('/res', (req, res) => {
    res.status(201).json({
        name: 'Alberto',
        lastName: 'Kato'
    })
    // res.render('index', {

    // });
});



module.exports = router;