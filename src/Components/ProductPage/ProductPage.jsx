import React, { useEffect, useState } from "react";
import style from "./ProductPage.module.scss";
import Container from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import { useParams } from "react-router-dom";
import { API_URL } from "../../const";
import cn from "classnames";
import ColorList from "../ColorList/ColorList";
import Count from "../Count/Count";
import ProductSize from "../ProductSize/ProductSize";
import Goods from "../Goods/Goods";
import { fetchGoods } from "../../features/goodsSlice";
import BtnLike from "../BtnLike/BtnLike";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { gender, category } = product;

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleIncrement = (e) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (e) => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(
      fetchGoods({ gender, category, count: 4, top: true, exclude: id })
    );
  }, [dispatch, gender, category, id]);

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img
            className={style.image}
            src={`${API_URL}/${product.pic}`}
            alt={`${product.title}`}
          />
          <form className={style.content}>
            <h2 className={style.title}>{product.title}</h2>
            <p className={style.price}>руб {product.price}</p>
            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул</span>
              <span className={style.id}>{product.id}</span>
            </div>
            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
              <ColorList
                handleColorChange={handleColorChange}
                selectedColor={selectedColor}
                colors={product.colors}
              />
            </div>
            <ProductSize
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
              size={product.size}
            />
            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>
                Описание
              </p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>
            <div className={style.control}>
              <Count
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button className={style.addCart} type="submit">
                В корзину
              </button>
              <button
                className={style.favorite}
                aria-label="Добавить в избранное"
                type="button"
              >
                <BtnLike id={id} />
              </button>
            </div>
          </form>
        </Container>
      </section>
      <Goods title={"Вам также может понравиться"} />
    </>
  );
}

export default ProductPage;
