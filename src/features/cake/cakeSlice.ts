import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//const createSlice = require("@reduxjs/toolkit").createSlice;

type InitStateType = {
  numOfCakes: number;
};

const initialState: InitStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state: InitStateType) => {
      state.numOfCakes--;
    },
    restocked: (state: InitStateType, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

//module.exports = cakeSlice.reducer;
export default cakeSlice.reducer;

//module.exports.cakeActions = cakeSlice.actions;
export const { ordered, restocked } = cakeSlice.actions;
