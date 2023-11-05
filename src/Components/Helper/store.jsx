import { createStore } from "redux";
import counterReducer from "./Reducer/productReducer";
let store = createStore(counterReducer);
export default store;
