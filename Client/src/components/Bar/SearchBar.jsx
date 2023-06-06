import { useState } from "react";
import styles from "./bar.module.css"

export default function SearchBar(props) {

   const[id, setId] = useState("")

   const handleChange = event => {
      const{value} = event.target;
      setId(value)
   }

   const handleSearch = () => {
      const existingCharacter = props.characters.find(
        (character) => character.id === Number(id)
      );
  
      if (existingCharacter) {
        alert("¡El personaje ya está agregado!");
      } else {
        props.onSearch(id);
      }
  
      setId("");
    };

   return (
      <section className={styles.section}>
         <input className={styles.input} type="search" name="search" onChange={handleChange} value={id}/>
         <button id="btn" className={styles.btn} onClick={handleSearch} >Agregar</button>
      </section>
   );
}
