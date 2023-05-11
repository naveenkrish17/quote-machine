import { createSlice } from "@reduxjs/toolkit";

const newQuote = createSlice({
    name: "newQuote",
    initialState: 0,
    reducers: {
        generateNew: (state) => Math.floor(Math.random() * 102),
    },
})

export const { generateNew } = newQuote.actions;

export default newQuote.reducer;