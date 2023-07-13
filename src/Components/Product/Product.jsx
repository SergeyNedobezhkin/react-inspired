import React from "react";
import style from "./Product.module.scss";
import { API_URL } from "../../const";
import { NavLink } from "react-router-dom";
import ColorList from "../ColorList/ColorList";
import BtnLike from "../BtnLike/BtnLike";

function Product({ id, pic, title, price, colors }) {
  return (
    <article className={style.product}>
      <NavLink className={style.link} to={`/product/${id}`}>
        <img className={style.image} src={`${API_URL}/${pic}`} alt={title} />
        <h3 className={style.title}>{title}</h3>
      </NavLink>
      <div className={style.row}>
        <p className={style.price}>руб {price}</p>

        <BtnLike id={id} />
      </div>
      <ColorList colors={colors} />
    </article>
  );
}

export default Product;
