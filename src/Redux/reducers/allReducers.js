import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CounterReducer } from "./CounterReducer";

export const allreducers=combineReducers({
    CounterReducer,
    AuthReducer
});