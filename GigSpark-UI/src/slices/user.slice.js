import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, 
  // tesing..
  // user: {
  //   name: "Mohit",
  //   isSeller: false,
  //   profile:
  //     "https://imgs.search.brave.com/5RcKrrip-z_mPPhPY02HEF1QyDhPBbNGNkzZb_viqyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jdXRlLWJveS1p/bWFnZV82NzYwOTIt/NzQ2MS5qcGc_c2Vt/dD1haXNfaHlicmlk",
  // },
};

const userSlice = createSlice({
  name: "User Slice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    deleteCurrentUser: (state, action) => {
      state.user = null;
    },
    updateCurrentUser: (state, action) => {
      state.user = { ...state, ...action.payload };
    },
  },
});

export const { setCurrentUser, deleteCurrentUser, updateCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
