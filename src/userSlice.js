import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, first_name, last_name, email } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          first_name,
          last_name,
          email,
        };
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
