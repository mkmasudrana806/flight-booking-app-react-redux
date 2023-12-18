import { FLIGHT_BOOK, FLIGHT_DELETE } from "./actionTypes";

export const book = (value) => {
  return {
    type: FLIGHT_BOOK,
    payload: "Masud rana is booking now",
  };
};

export const deleteBooking = (id) => {
  return {
    type: FLIGHT_DELETE,
  };
};
