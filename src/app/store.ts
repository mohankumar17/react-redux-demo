// const configureStore = require("@reduxjs/toolkit").configureStore;

// const cakeReducer = require("../features/cake/cakeSlice");
// const iceCreamReducer = require("../features/icecream/iceCreamSlice");

import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

//module.exports = store;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
