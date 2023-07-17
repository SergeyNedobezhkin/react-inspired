import React from "react";
import style from "./OrderModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../const";
import { clearCart } from "../../../features/cartSlice";

function OrderModal() {
  const dispatch = useDispatch();
  const {
    order: { values, order, id, totalPrice },
  } = useSelector((state) => state.cart);
  const { goodsList } = useSelector((state) => state.goods);

  const handleCloseModule = () => {
    dispatch(clearCart());
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={style.modal} onClick={handleCloseModule}>
      <div className={style.body} onClick={handleModalClick}>
        <h2 className={style.title}>Заказ оформлен №{id}</h2>
        <div className={style.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>
        <ul className={style.customer}>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Получатель</span>
            <span className={style.customerData}>{values.fio}</span>
          </li>
          {values.delivery === "delivery" && (
            <li className={style.customerItem}>
              <span className={style.customerTitle}>Адрес доставки</span>
              <span className={style.customerData}>{values.address}</span>
            </li>
          )}
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Телефон</span>
            <span className={style.customerData}>{values.phone}</span>
          </li>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>E-mail</span>
            <span className={style.customerData}>{values.email}</span>
          </li>
          <li className={style.customerItem}>
            <span className={style.customerTitle}>Способ получения</span>
            <span className={style.customerData}>
              {values.delivery === "delivery" ? "Доставка" : "Самовывоз"}
            </span>
          </li>
        </ul>

        <ul className={style.goods}>
          {order.map((item) => {
            const product = goodsList.find((product) => product.id === item.id);
            return (
              <li
                key={`${item.id}${item.color}${item.size}`}
                className={style.goodsItem}
              >
                <img
                  className={style.goodsImg}
                  src={`${API_URL}/${product.pic}`}
                  alt={product.title}
                />
                <p className={style.goodsCount}>X{item.count}</p>
              </li>
            );
          })}
        </ul>
        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
        <button className={style.close} onClick={handleCloseModule}></button>
      </div>
    </div>
  );
}

export default OrderModal;
