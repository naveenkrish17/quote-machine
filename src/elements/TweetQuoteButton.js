import React from "react";

const TweetQuoteButton = (props) => {
  return (
    <div className="tweet-quote-button">
      <a id="tweet-quote" href={`https://www.twitter.com/intent/tweet?text=${props.quotes}`} target="_blank" rel="noreferrer">
        <button>
          <i className="fa fa-twitter"></i>
        </button>
      </a>
    </div>
  );
};

export default TweetQuoteButton;
