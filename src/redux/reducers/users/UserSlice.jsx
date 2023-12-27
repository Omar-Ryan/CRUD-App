import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../../components/Data";

// const initialState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// const initialState = {
//   todoList: localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     : [],
// };

const userSlice = createSlice({
  name: "user",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action); // test
      state.push(action.payload);
    },
    // updateUser: ,
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
