import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGORY_URL } from "../const";

export const fetchNavigation = createAsyncThunk(
  "navigation/fetchNavigation",
  async () => {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    return data;
  }
);

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activeGender: "women",
    categories: {},
    genderList: [],
    error: null,
    status: "idle",
  },
  reducers: {
    setActiveGender(state, action) {
      state.activeGender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNavigation.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
        state.genderList = Object.keys(action.payload);
      })
      .addCase(fetchNavigation.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;
