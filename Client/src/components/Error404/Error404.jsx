import Styles from "./error.module.css"


function Error404(){


    return(
        <section className={Styles.section}>
            <article className={Styles.article}>
                <h1>Error 404</h1>
                <h3>Página no encontrada</h3>
            </article>
        </section>
    )
}

export default Error404