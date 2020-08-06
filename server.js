// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// const port = 3000;
// const server = app.listen(port,listening);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

function listening(){
    console.log(`running on localhost: ${port}`);
}

const sendData = (req,res) => {
    res.send(projectData);
}
app.get('/return', sendData);


const addData = (req, res) =>{
    console.log(req.body);
    newWeather = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData.push(newWeather);
}
app.post('/add',addData);
