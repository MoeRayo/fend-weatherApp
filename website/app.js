/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip='
let apiKey = '&appid=0468d3f46e82858885556fe6e20e4f2d'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeather = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key)
    try {
        const data = await res.json();
        return data;
    }catch(error){
        console.log('error',error);
    }
}

const postData = async ( url ='', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log('error', error);
    }
}
const updateUI = async ()=> {
    const request = await fetch('/return');
    try {
        const returnData = await request.json();
        document.getElementById('date').textContent= `Date:${returnData[0].date}`;
        document.getElementById('temp').textContent= `Temperature: ${returnData[0].temp}`;
        document.getElementById('content').textContent= `I feel ${returnData[0].content}`;
    } catch(error){
        console.log('error', error);
    }
}

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseURL,newZip,apiKey)

    .then(function(data){
        console.log(data);
        // add data to post request
        // console.log(newDate)
        postData('./add', {date:newDate, temp:data.list[0].main.temp, content:feelings})
        updateUI();
    })
};