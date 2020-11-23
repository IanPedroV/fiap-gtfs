const gtfs = require('gtfs');
const config = require('./config.json');

const csv = require('csvtojson')

async function test() {
    // ROUTE 1584ebd7-f3ca-43ab-a6fa-5483a0f6f2a4

    const db = await gtfs.openDb(config);
    const routeId = '1584ebd7-f3ca-43ab-a6fa-5483a0f6f2a4';
    const trips = await gtfs.getTrips(
        {
            route_id: [
                routeId
            ]
        }
    );

    const trip = trips[0];

    const stopTimes = await gtfs.getStoptimes(
        {
            trip_id: [
                trip.trip_id
            ]
        }
    );

    // Invoking csv returns a promise
    const vehicles = await csv()
        .fromFile('./vehicles_1602262119519.csv');

    crossedStopTimesWithVehicles = vehicles.filter(vehicles => vehicles.route_id === routeId)


    crossedStopTimesWithVehicles.forEach(c => console.log("Vehicle entry: " + JSON.stringify(c)))
    stopTimes.forEach(s => console.log("Stop time entry: " + JSON.stringify(s)))
}


test()
