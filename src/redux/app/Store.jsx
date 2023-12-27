import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/users/UserSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store;