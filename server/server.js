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

app.get('/testing', (req,res) => {
    Houses.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((error) => {
        res.status(404).send('SORRY NO DATA');
    });
    // res.status(200).send('OK');
});

app.post('/post', (req, res) => {

    mySqlDb.insertSampleData();
})


let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});


