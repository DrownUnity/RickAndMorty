import styles from "./card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {motion} from "framer-motion"

function Card(props) {
  const { onClose, addFav, removeFav, myFavorites } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <motion.section className={styles.cards}
                initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
    >
      <button className={styles.btn} onClick={() => onClose(props.id)}>X</button>
      <article className={styles.fav}>
        {isFav ? (<button onClick={handleFavorite} className={styles.favbtn}>❤️</button>) : 
        (<button onClick={handleFavorite} className={styles.favbtn}>🤍</button>)}
      </article>
      <section>
        <img src={props.image} alt='' className={styles.image}/>
        <NavLink to={`/detail/${props.id}`} className={styles.link}>
          <h2 className={styles.nombre}>{props.name}</h2>
        </NavLink>
        <article className={styles.text}>
          <h2>{props.status}</h2>
          <h2>{props.especie}</h2>
          <h2>{props.gender}</h2>
          <h2>{props.origin}</h2>
        </article>
      </section>
    </motion.section>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
