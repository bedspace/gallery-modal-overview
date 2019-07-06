const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mySqlDb = require('./../database/seed.js');


let app = express();
app.use(morgan('dev'));
app.use(morgan(':method :url :status :res[content-length] - :response-time MILLISECONDS'));

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser());

app.get('/testing', (req,res) => {
    mySqlDb.getHouses((error, results) => {
        if (error) {
            console.log("ERROR : " + error);
        } else {
            res.status(200).send(results);
        }
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


