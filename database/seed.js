const Houses = require('./index.js').Houses;
const Images = require('./index.js').Images;
const Amenities = require('./index.js').Amenities;
const faker = require('faker');
const ImageData = require('./data.js').imageData;


const GenerateFakeHouses = () => {

    let HouseListings = [];
    for (var i = 0; i < 10; i++) {
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
        console.log('THIS IS WHAT THE RESULT IS');
        console.log(data);
    });
    //by here, we will have all these fakeHouses
    //Now we findAll houses, get each ID and then inject several images into them
};

GenerateFakeHouses();


const GenerateFakeImages = (houseId) => {
    let bulkValues = [];
    for (var i = 0; i < ImageData.length; i++) {
        let values = {
            image_url: ImageData[i].url,
            house_Id: 1,
            desc: ImageData[i].desc
        }
        bulkValues.push(values);
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



//.sync() these guys's data.