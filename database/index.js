const Sequelize = require('sequelize');

const sequelize = new Sequelize('airbnb', 'root', null, {
    host: '172.17.0.2',
    dialect: 'mysql',
    logging: false
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
    desc: {
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