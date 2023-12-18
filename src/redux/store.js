import { createStore } from "redux";
import { flightReducer } from "./flight/flightReducers";

export const store = createStore(flightReducer);

