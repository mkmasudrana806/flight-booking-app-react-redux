import { FLIGHT_BOOK } from "./actionTypes";

// initial state
const initialState = [];

// reducer
export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_BOOK:
      break;
    default:
      return [...state, { value: 100 }];
  }
};
