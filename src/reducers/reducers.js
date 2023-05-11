import { combineReducers } from "@reduxjs/toolkit";
import newQuoteReducer from "../features/quotes/quoteSlice";
import newColorReducer from "../features/color/colorSlice";

const rootReducer = combineReducers({
  newQuote: newQuoteReducer,
  newColor: newColorReducer
});

export default rootReducer;
