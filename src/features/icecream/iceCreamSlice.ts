import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//const createSlice = require("@reduxjs/toolkit").createSlice;

type InitStateType = {
  numOfIceCreams: number;
};

const initialState: InitStateType = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state: InitStateType) => {
      state.numOfIceCreams--;
    },
    restocked: (state: InitStateType, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

//module.exports = iceCreamSlice.reducer;
export default iceCreamSlice.reducer;

//module.exports.iceCreamActions = iceCreamSlice.actions;
export const { ordered, restocked } = iceCreamSlice.actions;
