const fs = require('fs')
const express = require('express')
const fetch = require('node-fetch')
const selectRandomWord = () => {
    const file = fs.readFileSync('www/assets/palavras/escrever.txt', 'utf-8')
    const arr = []
    
    file.split(/\r?\n/).forEach(line => {
        arr.push(line)
    })
    const randomNumber = Math.floor(Math.random() * 242)
    const gameWord = arr[randomNumber]
    return gameWord
}


const doesWordExist = async (palavra) => {
    const response = await fetch(`https://significado.herokuapp.com/v2/sinonimos/${palavra}`)
    const json = await response.json()
    return json
}


module.exports = {selectRandomWord, doesWordExist}

