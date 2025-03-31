const initialState = {
    admin: null,
    token: localStorage.getItem("admin-auth-token") || "",
    isLogged: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("admin-auth-token", action.payload.token);
            return ({
                admin: action.payload.user,
                token: action.payload.token,
                isLogged: true
            })
        case "LOGOUT":
            localStorage.removeItem("admin-auth-token");
            return ({
                admin: null,
                token: "",
                isLogged: false
            })
        default:
            return state
    }
}

export { loginReducer }