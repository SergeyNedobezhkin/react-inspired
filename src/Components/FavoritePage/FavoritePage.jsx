import React, { useEffect } from "react";
import Goods from "../Goods/Goods";
import style from "./FavoritePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../hooks/usePageFromSearchParams";

function FavoritePage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      if (page) {
        param.page = page;
      }
      dispatch(fetchGoods(param));
    }
  }, [dispatch, page, favorites]);

  return favorites.length ? (
    <Goods title="Избранные товары" />
  ) : (
    <h3 className={style.empty}>Вы ничего не добавили в избранное!</h3>
  );
}

export default FavoritePage;
