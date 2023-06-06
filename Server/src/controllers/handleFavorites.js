const express = require("express");

const server = express();

server.use(express.json());

let myFavorites = [];

const postFav = (req, res) => {

    const character = req.body; 

    myFavorites.push(character);

    res
        .status(200)
        .json(myFavorites)
}

const deleteFav = (req, res) => {

    const {id}= req.params;

    const filteredCharacter = myFavorites.filter((character) =>  character.id !== parseInt(id));

    res
        .status(200)
        .json(filteredCharacter);
}

module.exports = {postFav, deleteFav}