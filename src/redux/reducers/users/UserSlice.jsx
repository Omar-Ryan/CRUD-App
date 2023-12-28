import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../../components/Data";

const initialState = {
  usersList: localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [...usersList],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action); // test
      state.usersList.push(action.payload);
      localStorage.setItem("list", JSON.stringify(state.usersList));
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userToUpdate = state.usersList.find((user) => user.id == id);
      if (userToUpdate) {
        (userToUpdate.name = name), (userToUpdate.email = email);
        localStorage.setItem("list", JSON.stringify(state.usersList));
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.usersList = state.usersList.filter((user) => user.id !== id);
      localStorage.setItem("list", JSON.stringify(state.usersList));
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
