const express = require('express');
const app = express();
const port = 3000;

const Datastore = require('nedb')

app.listen(port, () => {console.log('listening at 3000')});
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db')
database.loadDatabase()

app.get('/api', (request, response) => {
    database.loadDatabase();
    database.find({}, (error, data) =>{
        if(error){
            response.end();
            return;
        }
        response.json(data)
    })
})

app.post('/api', (request, response) => {
    database.loadDatabase();
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    console.log(data)
    response.json(data)
})
