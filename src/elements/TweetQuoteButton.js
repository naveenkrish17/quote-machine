import React from "react";

const TweetQuoteButton = () => {
  return (
    <div className="tweet-quote-button">
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        <button>
          <i className="fa fa-twitter"></i>
        </button>
      </a>
    </div>
  );
};

export default TweetQuoteButton;
