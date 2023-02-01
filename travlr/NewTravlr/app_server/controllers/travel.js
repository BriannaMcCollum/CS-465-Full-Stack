/* Pulls what's needed to read the JSON file then reads it's data */
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* --OLD GET travel view-- */
//const travel = (req, res) => {
//    res.render('travel', { title: 'Travlr Getaways', trips });
//};

/* render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + " - Travel";

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in database!';
        }
    }

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET travel list view */
const travelList = (req, res) => {
    //pat that points to the right location
    const path = '/api/trips';
    //HTTP always has three parts, url, method and body
    const requestOptions = {
        //backticks cause parse and resolve for contents
        //then places it in the url
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    //uses the console to print a message for bugtesting
    console.info('>> travelController.travelList calling' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )   
}

module.exports = {
    travelList
};