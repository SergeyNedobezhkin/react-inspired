import React, { useEffect } from "react";
import style from "./SearchPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../features/goodsSlice";
import Goods from "../Goods/Goods";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("q");
    const params = { search };
    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);

  return goodsList.length ? (
    <Goods />
  ) : (
    <h3 className={style.empty}>
      Ничего не найдено по вашему запросу: {searchParams.get("q")}
    </h3>
  );
}

export default SearchPage;
