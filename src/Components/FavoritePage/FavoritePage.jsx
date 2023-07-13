import React, { useEffect } from "react";
import Goods from "../Goods/Goods";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/goodsSlice";
// import style from "./FavoritePage.module.scss";

function FavoritePage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  useEffect(() => {
    if (favorites) {
      dispatch(fetchCategory({ list: favorites }));
    }
  }, [dispatch, favorites]);

  return <Goods title="Избранные товары" />;
}

export default FavoritePage;
