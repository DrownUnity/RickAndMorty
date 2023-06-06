import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Styles from "./detail.module.css"
import {motion} from "framer-motion"


function Detail(){

const {id} =  useParams();

const [character, setCharacter] = useState({});

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(
        <div className={Styles.section} >
            <motion.section 
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className={Styles.info}>
               <h2 className={Styles.name}>{character.name}</h2>
               <h2>Status: {character.status}</h2>
               <h2>Specie: {character.species}</h2>
               <h2>Gender: {character.gender}</h2>
               <h2>Origin: {character.origin?.name}</h2>
            </motion.section>
            <section className={Styles.imgContainer}>
               <img src={character.image} alt="" className={Styles.img}/> 
            </section>
            
        </div>
    )
}

export default Detail