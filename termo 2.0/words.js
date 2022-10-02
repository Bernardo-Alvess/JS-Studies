const fs = require('fs')
const express = require('express')
const fetch = require('node-fetch')

const readFileToArray = (fileDir) => {
    const file = fs.readFileSync(fileDir, 'utf-8')
    const arr = []
    
    file.split(/\r?\n/).forEach(line => {
        arr.push(line)
    })

    return arr
}

const selectRandomWord = () => {
    const arr = readFileToArray('www/assets/palavras/lista.txt')
    const randomNumber = Math.floor(Math.random() * 242)
    let gameWord;
    
    do{
        gameWord = arr[randomNumber]
    }while(gameWord.length == 4)

    return gameWord
}


const doesWordExist = async (palavra) => {
    const word = palavra.join('')
    const arr = readFileToArray('www/assets/palavras/lista.txt')

    let bool = arr.includes(word)

    if(bool){
        return true
    }else{
        return false
    }
}


module.exports = {selectRandomWord, doesWordExist}

