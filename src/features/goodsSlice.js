import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchGender = createAsyncThunk(
  "goods/fetchGender",
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append("gender", gender);
    const response = await fetch(url);
    return await response.json();
  }
);

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    const response = await fetch(url);
    return await response.json();
  }
);

export const fetchAll = createAsyncThunk(
  "goods/fetchAll",
  async (param = []) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    url.searchParams.append("count", "all");
    const response = await fetch(url);
    return await response.json();
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    goodsList: [],
    error: null,
    status: "idle",
    page: 0,
    pages: 0,
    totalCount: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })

      .addCase(fetchGender.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload.goods;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
      })

      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(fetchAll.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })

      .addCase(fetchAll.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { setPage } = goodsSlice.actions;

export default goodsSlice.reducer;
