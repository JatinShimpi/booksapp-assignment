// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [], // Store fetched users here
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload; // Set users fetched from API
    },
    addUser: (state, action) => {
      state.users.push(action.payload); // Add a new user
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedData };
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export actions for dispatching
export const { setUsers, addUser, updateUser, removeUser } = userSlice.actions;

// Export the reducer for the store
export default userSlice.reducer;
