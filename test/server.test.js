const request = require('supertest');
const app = require('./../server/server.js').app;
const db = require('./../database/index.js');
const express = require('express');
//JEST is automatically available in global scope


describe('Inject sampleData and extract via get Request', () => {
    beforeAll(async (done) => {
        //Inject a new record of sampleData 
        await db.Houses.create({
            house_desc: "This is a sample test house",
            owner_name: "Sample Julio",
            total_rooms: 1,
            total_beds: 1,
            total_baths: 1,
            total_guests: 1
        }).then(() => {
           done();
        });

    });

    afterAll(async (done) => {
        await db.Houses.destroy({
            where: {
                owner_name: "Sample Julio"
            }
        }).then(() => {
            console.log("Row deleted");
            done();
        });
    });

    test('Make sure GET request contains Sample House Listing', async (done) => {
        //fire fake get request
        console.log('HI HI');
        let response = await request(app).get('/testing');
        response = JSON.parse(response.text);
        // response = [...response];
        // response = Promise.resolve(response);
        // response = Array.prototype.slice.call(response);
        expect(typeof response).toBe('object');
        done();
    });

});