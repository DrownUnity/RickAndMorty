import { useState } from "react"
import validation from "../validation";
import Styles from "./form.module.css"
import {motion} from "framer-motion"


function Form(props){

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleChange = event => {

        const {name, value} = event.target;
        setInput({...input, [name]: value
        });

        setError(validation({
            ...input, [name]:value
        }));
    }

    const [error, setError] = useState({})

    const {login} = props

    const handleSubmit = (event) => {
    event.preventDefault();
    login(input);
    };

    return(

        <motion.div className={Styles.section}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <form onSubmit={handleSubmit} action="" className={Styles.form}> 
                <label htmlFor="">Email:</label>
                <input value={input.email} type="text" name="email" onChange={handleChange} className={Styles.input}/>
                <p>{error.email ? error.email : null}</p>
                <label htmlFor="">Password: </label>
                <input value={input.password} type="password" name="password" onChange={handleChange} className={Styles.input}/>
                <p>{error.password ? error.password : null}</p>
                <button type="submit" className={Styles.btn} >Submit</button>
            </form>
            <div className={Styles.stars1}></div>
            <div className={Styles.stars2}></div>
            <div className={Styles.stars3}></div>
        </motion.div>

    )
}

export default Form