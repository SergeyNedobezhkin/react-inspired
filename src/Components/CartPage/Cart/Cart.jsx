import React from "react";
import style from "./Cart.module.scss";
import Container from "../../Layout/Container/Container";
import CartItem from "../CartItem/CartItem";

function Cart({ cartItems, goodsList }) {
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList?.find((product) => product.id === item.id);
    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>
        {cartItems.length && totalPrice ? (
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
          <h3 className={style.empty}>Корзина пустая</h3>
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
