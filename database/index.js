//This is where you connect to database using sequelize.
//You create the schema here.
//after that,  export this to the seed so the seed.js
//can use this script and inject its sample data into the
//tables;
//also add something to clear the database before each script
console.log('I AM LINE 7 on index.js so i ran');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('airbnb', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Model = Sequelize.Model;


class Houses extends Model {};
Houses.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    house_desc: {
        type: Sequelize.TEXT
    },
    owner_name: {
        type: Sequelize.STRING
    },
    total_rooms: {
        type: Sequelize.INTEGER
    },
    total_beds: {
        type: Sequelize.INTEGER
    },
    total_baths: {
        type: Sequelize.INTEGER
    }, 
    total_guests: {
        type: Sequelize.INTEGER
    }
}, {sequelize, modelName: 'Houses', timestamps: false });


class Images extends Model {};

Images.init({
    image_url: {
        type: Sequelize.STRING
    },
    house_Id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Houses',
            key: 'id'
        }
    }
}, {sequelize, modelName: 'Image', timestamps: false});

class Amenities extends Model {};

Amenities.init({
    items: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    house_Id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'houses',
            key: 'id'
        }
    }
}, {sequelize, modelName: 'Amenities', timestamps: false});

sequelize.sync();

module.exports = {Houses, Images, Amenities};
//HOUSES.HASMANY adds foreign key automatically, but id rather
// show it explicitly in the schema.
// Houses.hasMany(Images);
//THIS AUTO creates a houseId field inside images table
//or Images.belongsTo(Houses);
//allow null defaults to true

//shorter way of creating tables without .init method
// const User = sequelize.define('user', {
// // attributes
// firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
// },
// lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
// }
// }, {
// // options
// });
