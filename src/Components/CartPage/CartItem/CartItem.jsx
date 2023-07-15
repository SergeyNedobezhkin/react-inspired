import React from "react";
import style from "./CartItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../const";
import cn from "classnames";
import Count from "../../Count/Count";
import { addToCart } from "../../../features/cartSlice";
function CartItem({ id, color, size, count, goodsList }) {
  const { colorList } = useSelector((state) => state.color);
  const item = goodsList.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleCountChange = (count) => {
    if (count >= 1) {
      dispatch(addToCart({ id, color, size, count }));
    }
  };

  return (
    <article className={style.item}>
      <img
        className={style.image}
        src={`${API_URL}/${item?.pic}`}
        alt={item?.title}
      />
      <div className={style.contant}>
        <h3 className={style.title}>{item?.title}</h3>
        <p className={style.price}>руб: {item.price}</p>
        <div className={style.vendorCode}>
          <span className={style.subtitle}>Артикул:</span>
          <span>{id}</span>
        </div>
      </div>
      <div className={style.prop}>
        <div className={style.color}>
          <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
          <div
            style={{
              "--data-color": colorList?.find((item) => item.title === color)
                ?.code,
            }}
            className={style.colorItem}
          ></div>
        </div>
        <div className={style.size}>
          <p className={cn(style.subtitle, style.sizeTitle)}>Размер</p>
          <div className={style.sizeItem}>{size}</div>
        </div>
      </div>
      <button
        className={style.del}
        aria-label="Удалить товар из корзины"
      ></button>
      <Count
        className={style.count}
        count={count}
        handleDecrement={() => {
          handleCountChange(count - 1);
        }}
        handleIncrement={() => {
          handleCountChange(count + 1);
        }}
      />
    </article>
  );
}

export default CartItem;
