import Card from "../Card/Card"
import styles from "./cards.module.css"
export default function Cards(props) {

    const {characters, onClose} = props;

    const listItems = characters.map((person) => (
        <li key={person.id}>
          <Card
            id={person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            origin={person.origin.name}
            image={person.image}
            onClose={() => onClose(person.id)}
          />
        </li>
      ));

   return (
   <section>
      <ul className={styles.list}>{listItems}</ul>
   </section>
   )
}
