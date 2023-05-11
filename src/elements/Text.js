import React from "react";
import quotes from "../data/quotes.json";
import { useSelector } from "react-redux";
import QouteAuthor from "../elements/QuoteAuthor";

const Text = () => {
  const quoteIndex = useSelector((state) => state.newQuote);
  const bgColor = useSelector((state) => state.newColor);
  document.body.style.backgroundColor = bgColor;
  document.body.style.transition = "background-color 0.5s ease";

  return (
    <div className="qoute-text">
      <span>
        <i className="fa fa-quote-left"> </i>
        <h2
          id="text"
          style={{
            color: bgColor,
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {quotes.quotes[quoteIndex].quote}
        </h2>
      </span>
      <QouteAuthor author={quotes.quotes[quoteIndex].author} />
    </div>
  );
};

export default Text;
