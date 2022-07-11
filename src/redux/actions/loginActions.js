export const login = (email,password) => {

    return {type: 'login', 
    Email:email,
    Password:password
}
}