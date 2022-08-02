import express from 'express';
const app = express();
const port = 3000;

import fetch from 'node-fetch';

import Datastore from 'nedb';

const database = new Datastore('database.db');
database.loadDatabase();

app.listen(port, () => {console.log(`Listening at ${port}`)});
app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

app.post('/api', (req, res) => {
    database.loadDatabase()
    const data = req.body;
    database.insert(data);
    console.log(data);
    res.end()
})

app.get('/api', (req, res) => {
    database.loadDatabase();
    database.find({}, (err, response) =>{
        if(err){
            console.error(err);
            res.end();
        }
        res.send(response);
    })
})

app.get('/weather/:lat/:lon', async(req, res) => {
    const API_KEY = 'ccfe7be68d6648978a6154505222607';
    const lat = req.params.lat;
    const lon = req.params.lon;
    const fetchResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`)
    const json = await fetchResponse.json();
    res.send(json);
})