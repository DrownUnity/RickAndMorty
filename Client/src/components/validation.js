function validation(input){

    const regexPassword =  new RegExp("[0-9]");
    const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const error = {}

    if(!input.email){
        error.email = "Debe ingresar email"
    }else if(!regexMail.test(input.email)){
        error.email = "Debe ingresar un email válido"
    }else if(input.email.length> 35){
        error.email = "La máxima longitud esde 35 caracteres"
    }

    if(!regexPassword.test(input.password)){
        error.password = "Debe tener al menos un número"
    } else if(input.password.length < 6 || input.password.length > 10){
        error.password = "Debe tener una longitud de 6 a 10 caracteres"
    }

    return error
}

export default validation