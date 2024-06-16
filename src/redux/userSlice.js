import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return { isLoggedIn: true, userDetail: action.payload };
    },
    removeUser: () => {
      return { isLoggedIn: false, userDetail: null };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
