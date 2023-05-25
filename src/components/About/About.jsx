import Styles from "./about.module.css"
import {motion} from "framer-motion"

function About(){

    return (
            <motion.section className={Styles.section}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <article className={Styles.section}>
                <a href="https://www.linkedin.com/in/pablo-esa%C3%A1-023735152/" target="_blank">
                    <motion.h1 
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className={Styles.name}>Pablo Esaá</motion.h1>
                </a>
                <article className={Styles.info}>
                <h3>Productor Musical</h3>
                <h3>Estudiante de Desarrollo FullStack en Henry</h3>
                </article>
            </article>
            </motion.section>
    )
}

export default About