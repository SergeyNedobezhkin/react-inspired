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
import { fetchCategory } from "../../features/goodsSlice";

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
      fetchCategory({ gender, category, count: 4, top: true, exclude: id })
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
