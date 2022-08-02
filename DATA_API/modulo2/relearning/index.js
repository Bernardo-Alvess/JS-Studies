const express = require('express');
const Datastore = require('nedb');
const app = express();
const port = 3001;

app.listen(port, () => {console.log(`Listening at ${port}`)});
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db');
database.loadDatabase();

console.log(process.platform);

app.post('/api', (request, response) => {
    console.log(request.body)
    const data = request.body
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    database.insert(data);

    response.json({
        status: 'sucess',
        latitude: data.lat,
        longitude: data.lon,
        timestamp: data.timestamp
    })
})

    
