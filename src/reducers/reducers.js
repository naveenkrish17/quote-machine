import { combineReducers } from "@reduxjs/toolkit";
import newQuoteReducer from "../features/quotes/quoteSlice";

const rootReducer = combineReducers({
  newQuote: newQuoteReducer,
});

export default rootReducer;
