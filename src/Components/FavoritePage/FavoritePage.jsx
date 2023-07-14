import React, { useEffect } from "react";
import Goods from "../Goods/Goods";
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
    console.log("favorites", favorites);
  }, [dispatch, page, favorites]);

  return <Goods title="Избранные товары" />;
}

export default FavoritePage;
