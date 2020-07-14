// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 3001;
const server = app.listen(port, listening);
// Callback to debug
function listening(){
    console.log(`running on localhost: ${port}`);
}
// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/displayWeather', getWeather);

function getWeather(req, res) {
    res.send(weatherData);
}
// Post Route
const weatherData = [];
function addWeather(req, res) {
    const weatherInfo = req.body;
    const weatherEntry = {
        temp: weatherInfo.temp,
		date: weatherInfo.date,
		userRes: weatherInfo.userRes
    }
    weatherData.push(weatherEntry);
	res.send(weatherData);
}
app.post('/addWeather', addWeather);
