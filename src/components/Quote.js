import NewQuoteButton from "../elements/NewQuoteButton";
import TweetQuoteButton from "../elements/TweetQuoteButton";
import Text from "../elements/Text";
import { useSelector } from 'react-redux';
import "../styles/quote.css";

const Quote = (props) => {
    const quote = useSelector(state => state.quote);
  return (
    <div id="quote-box">
      <Text />
      <NewQuoteButton />
      <TweetQuoteButton />
    </div>
  );
};

export default Quote;
