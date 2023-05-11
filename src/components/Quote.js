import NewQuoteButton from "../elements/NewQuoteButton";
import TweetQuoteButton from "../elements/TweetQuoteButton";
import Text from "../elements/Text";
import "../styles/quote.css";

const Quote = () => {
  return (
    <div id="quote-box">
      <Text />
      <div id="quote-buttons">
        <TweetQuoteButton />
        <NewQuoteButton />
      </div>
    </div>
  );
};

export default Quote;
