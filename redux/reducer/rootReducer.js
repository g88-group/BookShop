import { combineReducers } from "redux";
import BooksReducer from "./BooksReducer";
const rootReducer = combineReducers({
    BooksReducer,
})

export default rootReducer;