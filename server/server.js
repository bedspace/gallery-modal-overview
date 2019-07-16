const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Houses = require('./../database/index.js').Houses;
const Images = require('./../database/index.js').Images;
const Amenities = require('./../database/index.js').Amenities;
// const mySqlDb = require('./../database/seed.js');


let app = express();
app.use(morgan('dev'));
app.use(morgan(':method :url :status :res[content-length] - :response-time MILLISECONDS'));

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser());

app.all('/*',(req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/testing', (req,res) => {
    Houses.findAll().then((results) => {
        console.log('BEFORE WE SEND RESULTS, THE DATA TYPE IS');
        res.status(200).send(results);
    }).catch((error) => {
        res.status(404).send('SORRY NO DATA');
    });
});


app.get('/images', (req,res) => {
    Images.findAll().then((results) => {
        res.status(200).send(results);
        // res.send({results});
    }).catch((error) => {
        res.status(404).send('SORRY NO IMAGE DATA');
    });
});

app.post('/post', (req, res) => {

    mySqlDb.insertSampleData();
})


let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});


module.exports = {app: app};

