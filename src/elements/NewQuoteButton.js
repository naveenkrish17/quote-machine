import React from "react";
import { useDispatch } from "react-redux";
import { generateNew } from "../features/quotes/quoteSlice";
import { generateNewColor } from "../features/color/colorSlice";

const NewQuoteButton = () =>{
    const dispatch = useDispatch();

    const handleClick = () => {
            dispatch(generateNew());
            dispatch(generateNewColor());
        }

    return(
        <button id="new-quote" onClick={handleClick}>New Quote</button>
    )
}

export default NewQuoteButton;