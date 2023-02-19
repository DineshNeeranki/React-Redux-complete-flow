import { configureStore } from "@reduxjs/toolkit";
import { allreducers} from "./reducers/allReducers";

export const store=configureStore({reducer : allreducers});