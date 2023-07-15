import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigationSlice.js";
import colorReducer from "../features/colorSlice.js";
import goodsReducer from "../features/goodsSlice.js";
import productReducer from "../features/productSlice.js";
import favoritesReducer from "../features/favoritesSlice.js";
import cartReducer from "../features/cartSlice.js";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export default rootReducer;
