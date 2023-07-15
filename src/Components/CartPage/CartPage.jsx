import React, { useEffect, useState } from "react";
import Order from "./Order/Order";
import Cart from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../features/goodsSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector((state) => state.cart);
  const { goodsList } = useSelector((state) => state.goods);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map((item) => item.id) }));
      setCount(countItems);
    }
  }, [dispatch, cartItems, countItems, count]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} goodsList={goodsList} />
    </>
  );
}

export default CartPage;
