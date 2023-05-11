import React from "react";
import { useDispatch } from "react-redux";
import { generateNew } from "../features/quotes/quoteSlice";

const NewQuoteButton = () =>{
    const dispatch = useDispatch();

    const handleClick = () => {
            dispatch(generateNew());
        }

    return(
        <button id="new-quote" onClick={handleClick}>New Quote</button>
    )
}

export default NewQuoteButton;