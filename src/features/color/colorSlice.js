import { createSlice } from "@reduxjs/toolkit";

const newColor = createSlice({
  name: "newColor",
  initialState: "#808080",
  reducers: {
    generateNewColor: (state) =>
      "#" +
      ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
  },
});

export const { generateNewColor } = newColor.actions;

export default newColor.reducer;
