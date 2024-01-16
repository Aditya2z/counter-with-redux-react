import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

let store = configureStore({ reducer: counterReducer });

export default store;
