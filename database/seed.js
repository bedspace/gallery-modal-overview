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

let getHouses = (callback) => {
    connection.query('SELECT * FROM HOUSES', (error, results, fields) => {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    })
}

let insertSampleData = (callback) => {

    let values = {
        house_desc: 'A house in downtown San Francisco!',
        owner_name: 'Julio Fuentes',
        total_rooms: 5,
        total_beds: 4,
        total_baths: 3,
        total_guests: 4
    }

    connection.query('INSERT INTO HOUSES SET ?', values , (error, results, fields) => {
        if (error) {
            console.log(error);
            callback(error, null);
        } else {
            console.log('query ran');
        }
    })
}

 module.exports.mysql = connection;
 module.exports.getHouses = getHouses;
 module.exports.insertSampleData = insertSampleData;





