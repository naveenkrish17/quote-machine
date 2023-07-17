import React from "react";
import { useSelector } from "react-redux";
import QouteAuthor from "../elements/QuoteAuthor";

const Text = (props) => {
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
          {props.quotes}
        </h2>
      </span>
      <QouteAuthor author={props.author} />
    </div>
  );
};

export default Text;
