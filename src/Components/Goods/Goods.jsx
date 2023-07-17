import React from "react";
import style from "./Goods.module.scss";
import Container from "../Layout/Container/Container";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";

function Goods({ title }) {
  const { goodsList, pages, totalCount, status } = useSelector(
    (state) => state.goods
  );

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>
          {title ?? "Новинки"}
          {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ""}
        </h2>
        {status === "loading" ? (
          <Preloader />
        ) : (
          <>
            {" "}
            <ul className={style.list}>
              {goodsList.map((item) => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
            {pages !== 0 && <Pagination />}
          </>
        )}
      </Container>
    </section>
  );
}

export default Goods;
