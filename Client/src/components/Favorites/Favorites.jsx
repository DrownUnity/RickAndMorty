import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './favorites.module.css';
import { filterCards, orderCards } from '../../Redux/action';
import { motion } from 'framer-motion';

function Favorites({ myFavorites, onClose, dispatch }) {
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <section>
      <article>
        <motion.select
          animate={{ y: 10 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          name="order"
          onChange={handleOrder}
          className={Styles.select}
        >
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </motion.select>
        <motion.select
          animate={{ y: 10 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          name="filtre"
          onChange={handleFilter}
          className={Styles.select}
        >
          <option value="ALL">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknow">Unknow</option>
        </motion.select>
      </article>
      <article className={Styles.section}>
        {Array.from(new Set(myFavorites.map((character) => character.id))).map((uniqueId) => {
          const character = myFavorites.find((character) => character.id === uniqueId);
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              especie={character.species}
              gender={character.gender}
              origin={character.origin.name}
              onClose={onClose}
            />
          );
        })}
      </article>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
