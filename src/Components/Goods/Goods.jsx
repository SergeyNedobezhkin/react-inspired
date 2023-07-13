import React from "react";
import style from "./Goods.module.scss";
import Container from "../Layout/Container/Container";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

function Goods({ title }) {
  const { goodsList } = useSelector((state) => state.goods);

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
      </Container>
    </section>
  );
}

export default Goods;
