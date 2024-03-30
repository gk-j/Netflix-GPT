const checkValidateData = (name,email,password) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_=+{};:,.<>?[\]|\s]{8,}$/.test(password)
    const isNameValid = /^[a-zA-Z\s]+$/.test(name)
    if(!isEmailValid) return "**Email ID is not valid"
    if(!isPasswordValid) return "**Password is not valid"
    if(!isNameValid) return "**Name is not valid"
    return null
}

export default checkValidateData