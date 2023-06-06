const axios = require("axios");
/* 

const URL = "https://rickandmortyapi.com/api/character/";

const  getCharById = (req, res) => {

    const {id} = req.params;

    axios
        .get(URL + id)
        .then(response => {
            const character = response.data;

            if(character){
                const {id, status, name, species, origin, image, gender} = character;
                res
                    .status(200)
                    .json({id, status, name, species, origin, image, gender})
            } else {
                res
                .status(400)
                .json({"message": "Not found"})
            }
        }
        )
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({"message": "Server Error"})
        })
} */

async function getCharById(req, res){

    const {id} = req.params;

    const URL = "https://rickandmortyapi.com/api/character/";

    const response = await axios.get(URL + id);

    let character = response.data;

    try{
        if(character){
            const {id, status, name, species, origin, image, gender} = character;
            res
                .status(200)
                .json({id, status, name, species, origin, image, gender})
        } else {
            res
            .status(400)
            .json({"message": "Not found"})
        }
    } catch(error) {
        res
                .status(500)
                .json({"message": "Server Error"})
    }
    


}

module.exports = getCharById;