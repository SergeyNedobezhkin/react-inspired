import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../const";

export const fetchColor = createAsyncThunk(
  "navigation/fetchColor",
  async () => {
    const response = await fetch(COLORS_URL);
    const data = await response.json();
    return data;
  }
);

const colorSlice = createSlice({
  name: "color",
  initialState: {
    colorList: {},
    error: null,
    status: "idle",
  },
  reducers: {
    setColor(state, action) {
      state.colorList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColor.fulfilled, (state, action) => {
        state.status = "success";
        state.colorList = action.payload;
        // console.log(state.colorList);
      })
      .addCase(fetchColor.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
