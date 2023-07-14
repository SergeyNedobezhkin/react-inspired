import React, { useEffect } from "react";
import style from "./Goods.module.scss";
import Container from "../Layout/Container/Container";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { usePageFromSearchParams } from "../hooks/usePageFromSearchParams";
import { fetchGoods } from "../../features/goodsSlice";

function Goods({ title }) {
  const dispatch = useDispatch();
  const { goodsList, pages } = useSelector((state) => state.goods);

  const goodsProduct = [];
  goodsList.map((item) => {
    goodsProduct.push(item.id);
  });

  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (goodsList) {
      const param = { list: goodsProduct };
      if (page) {
        param.page = page;
        // console.log(param.page);
      }

      // dispatch(fetchGoods(param));
    }
  }, [goodsList, dispatch, page]);

  // useEffect(() => {
  //   if (favorites) {
  //     const param = { list: favorites };
  //     if (page) {
  //       param.page = page;
  //     }
  //     dispatch(fetchGoods(param));
  //   }
  //   console.log("favorites", favorites);
  // }, [dispatch, page, favorites]);
  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>{title ?? "Новинки"}</h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        {pages !== 0 && <Pagination />}
      </Container>
    </section>
  );
}

export default Goods;
