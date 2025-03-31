const initialState = {
    lang: localStorage.getItem("lang")
}

export const langReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return ({
                lang: action.language_code
            })
        default:
            return state
    }
}
 