//NPM require mysql driver.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airbnb'
});

connection.connect((error) => {
    if (error) {
        console.log('ERROR CONNECTING' + error.stack);
    } else {
        console.log('connected as id ' + connection.threadId);
    }
});

 module.exports.mysql = connection;





