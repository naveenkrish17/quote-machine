import NewQuoteButton from "../elements/NewQuoteButton";
import TweetQuoteButton from "../elements/TweetQuoteButton";
import Text from "../elements/Text";
import "../styles/quote.css";
import { useSelector } from "react-redux";
import quotes from "../data/quotes.json";



const Quote = () => {
  const quoteIndex = useSelector((state) => state.newQuote);
  return (
    <div id="quote-box">
      <Text quotes = {quotes.quotes[quoteIndex].quote} author={quotes.quotes[quoteIndex].author}/>
      <div id="quote-buttons">
        <TweetQuoteButton quotes = {quotes.quotes[quoteIndex].quote}/>
        <NewQuoteButton />
      </div>
    </div>
  );
};

export default Quote;
