import { createStore, combineReducers } from "redux";
import productReducer from "../Reducers/productReducer";

const rootReducer = combineReducers({
    productReducer: productReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;