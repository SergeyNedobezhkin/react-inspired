import React from "react";
import style from "./Order.module.scss";
import Container from "../../Layout/Container/Container";

function Order({ cartItems }) {
  const handleSubmitOrder = (values) => {
    console.log({ cartItems, values });
  };
  return (
    <section>
      <Container>
        <h2 className={style.title}>Оформление заказа</h2>
        <></>
      </Container>
    </section>
  );
}

export default Order;
