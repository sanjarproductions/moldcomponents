import { cartReducer } from "./cartReducer";
import { langReducer } from "./langReducer"
import { loginReducer } from "./loginReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    language: langReducer,
    cart: cartReducer,
    login: loginReducer,
})

export default rootReducer