const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


let app = express();
app.use(morgan('dev'));
app.use(morgan(':method :url :status :res[content-length] - :response-time MILLISECONDS'));

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser());


app.get('/testing', (req,res) => {
    res.status(200).send('OK');
});


let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});