const express = require('express');
const fetch = require('node-fetch')
const words = require('./words')
const app = express();

app.listen(3000, () => {
    console.log('listening')
})

app.use(express.static('www'))
app.use(express.json({limit: '1mb'}))

app.get('/word', async (req, res) => {
    const word = words.selectRandomWord()
    res.send(word)
})
