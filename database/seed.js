const Houses = require('./index.js').Houses;
const Images = require('./index.js').Images;
const Amenities = require('./index.js').Amenities;
const faker = require('faker');
//require FAKER api here to fill in with fake data.
// you will be doing BULKCREATE

const GenerateFakeHouses = () => {
    //will need lorem ipsum for house_desc
    //random first and last name for owners
    //random numbers between rooms, beds, baths, guests
    //GenerateFakeImages(houseId)
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
    //Random image.urls
    // house_Id points to individual house
    //each house should have a default # of images
};

const GenerateFakeAmenities = () => {
    //this will be tricky
};



//.sync() these guys's data.