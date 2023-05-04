export const isEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isValidName = (name: string) => {
    const nameRegex = /^[a-zA-Z0-9]+([ _-]?[a-zA-Z0-9]+)*$/
    return name.length >= 2 && name.length <= 50 && nameRegex.test(name);
}

export const isPassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password)
}