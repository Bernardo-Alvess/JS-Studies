const fs = require('fs')
const express = require('express')
const selectRandomWord = () => {
    const file = fs.readFileSync('www/assets/palavras/escrever.txt', 'utf-8')
    const arr = []
    
    file.split(/\r?\n/).forEach(line => {
        arr.push(line)
    })
    const randomNumber = Math.floor(Math.random() * 242)
    const word = arr[randomNumber]
    return {word}
}

module.exports = {selectRandomWord}

