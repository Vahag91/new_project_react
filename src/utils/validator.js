const validateEmail = (email)=>{

    if(email.indexOf(" ") !== -1) {
        return false
    }
    const validEmail = /^[A-Za-z0-9._-]{4,}@[A-Za-z0-9-]+\.[A-Za-z]{2,5}$/
   
    return validEmail.test(email)

  

}


const validatePassword = (password)=>{

    if(password.indexOf(" ") !== -1) {
        return false
    }
    const validPassword =  /^[A-Z][a-zA-Z0-9]{7,}/g
  
    return validPassword.test(password)
}


export{
    validateEmail,
    validatePassword,
}