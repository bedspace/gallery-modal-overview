// const Houses = require('./index.js').Houses;
// const Images = require('./index.js').Images;
// const Amenities = require('./index.js').Amenities;
const faker = require('faker');
const ImageData = require('./data.js').imageData;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('airbnb', 'root', null, {
    host: 'localhost',
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

sequelize.sync().then(() => {
    const GenerateFakeHouses = () => {
    
        let HouseListings = [];
        for (var i = 0; i < 100; i++) {
            let fakeName = faker.name.findName();
            let fakeHouseDesc = faker.lorem.paragraph(10);
    
            let fakeRoomCount = Math.floor(Math.random() * 8);
            let fakeTotalBeds = Math.floor(Math.random() * 8);
            let fakeTotalBaths = Math.floor(Math.random() * 4);
            let fakeTotalGuests = Math.floor(Math.random() * 4);
    
            let fakeHouseListing = {
                house_desc: fakeHouseDesc,
                owner_name: fakeName,
                total_rooms: fakeRoomCount,
                total_beds: fakeTotalBeds,
                total_baths: fakeTotalBaths,
                total_guests: fakeTotalGuests
            }
            HouseListings.push(fakeHouseListing);
        }
    
    
        Houses.bulkCreate(HouseListings)
        .then(() => {
            return Houses.findAll();
        })
        .then((data) => {
            // console.log('THIS IS WHAT THE RESULT IS');
            // console.log(data);
        });
        //by here, we will have all these fakeHouses
        //Now we findAll houses, get each ID and then inject several images into them
    };
    
    GenerateFakeHouses();
    
    
    const GenerateFakeImages = (houseId) => {
        let bulkValues = [];
        for (let i = 1; i <= 100; i++) {
            for (var x = 0; x < ImageData.length; x++) {
                let values = {
                    image_url: ImageData[x].url,
                    house_Id: i,
                    desc: ImageData[x].desc
                }
                bulkValues.push(values);
            }
        }
    
        Images.bulkCreate(bulkValues)
        .then(() => {
            return Images.findAll();
        })
        .then((data) => {
            console.log('THE RESULT FOR IMAGES IS');
            console.log(data);
        })
    };
    
    GenerateFakeImages();
    
    const GenerateFakeAmenities = () => {
        Amenities.create({
            items: 'Wifi',
            category: 'Basic',
            house_Id: 1
        }).then(() => {
            return Amenities.findAll();
        }).then((data) => {
            console.log('AMENITIES DATA IS ');
            console.log(data);
        })
    };
    
    GenerateFakeAmenities();

});

module.exports = {Houses, Images, Amenities};
//.sync() these guys's data.