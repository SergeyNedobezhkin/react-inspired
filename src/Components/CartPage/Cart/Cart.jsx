import React from "react";
import style from "./Cart.module.scss";
import Container from "../../Layout/Container/Container";
import CartItem from "../CartItem/CartItem";

function Cart({ cartItems, goodsList }) {
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemList = goodsList?.find((cartItem) => cartItem.id === item.id);
    return itemList?.price * item.count + sum;
  }, 0);

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>
        {goodsList.length ? (
          <ul className={style.list}>
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.color}-${item.size}`}
                className={style.item}
              >
                <CartItem {...item} goodsList={goodsList} />
              </li>
            ))}
          </ul>
        ) : (
          <h3>Корзина пустая</h3>
        )}
        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
      </Container>
    </section>
  );
}

export default Cart;
