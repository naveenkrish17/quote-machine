import React from "react";
import quotes from "../data/quotes.json";
import { useSelector } from "react-redux";
import QouteAuthor from "../elements/QuoteAuthor";

const Text = () => {
  const quoteIndex = useSelector((state) => state.newQuote);
  return (
    <div className="qoute-text">
      <i className="fa fa-quote-left"> </i>
      <span>
        <p id="text">{quotes.quotes[quoteIndex].quote}</p>
      </span>
      <QouteAuthor author={quotes.quotes[quoteIndex].author} />
    </div>
  );
};

export default Text;
