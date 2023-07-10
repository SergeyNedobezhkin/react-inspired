import React from "react";
import style from "./Goods.module.scss";
import Container from "../Components/Layout/Container/Container";
import Product from "../Components/Product/Product";
import { useSelector } from "react-redux";

function Goods({ categoryData }) {
  const { goodsList } = useSelector((state) => state.goods);
  const title = categoryData?.title ?? "Новинки";

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>{title}</h2>
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
