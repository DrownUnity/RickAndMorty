import SearchBar from "../Bar/SearchBar"
import { NavLink} from 'react-router-dom';
import Styles from "./nav.module.css"

function Nav(props){

    return(
        <section className={Styles.section}>
            <article>
                <NavLink to="/about" className={Styles.link}>
                    <button className={Styles.btn}>About</button>
                </NavLink>
                <NavLink to="/home" className={Styles.link}>
                    <button className={Styles.btn}>Home</button>
                </NavLink>
                <NavLink to="/favorites" className={Styles.link}>
                    <button className={Styles.btn}>Favorites</button>
                </NavLink>
            </article>
            <SearchBar onSearch={props.onSearch} characters={props.characters}/>
        </section>
    )
}

export default Nav