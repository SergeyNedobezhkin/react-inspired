import React from "react";
import cn from "classnames";
import Container from "../../Layout/Container/Container";
import style from "./Top.module.scss";
import logo from "/src/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../../../assets/heart.svg";
import { ReactComponent as CartSVG } from "../../../assets/cart.svg";
import { ReactComponent as SearchSVG } from "../../../assets/search.svg";
import { useSelector } from "react-redux";
function Top() {
  const { cartItems } = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a
          className={cn(style.topLink, style.topPhone)}
          href="tel:8930 4902620"
        >
          8 930 490 26 20
        </a>
        <NavLink to="/" className={style.topLogo}>
          <img src={logo} alt="Логотип Inspired" />
        </NavLink>
        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.topNavItem}>
              <button className={style.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.topNavItem}>
              <NavLink to="/cart" className={cn(style.topLink)}>
                <p className={style.topLinkCount}>{cartCount}</p>
                <CartSVG />
              </NavLink>
            </li>
            <li className={style.topNavItem}>
              <NavLink to="/favorite" className={cn(style.topLink, style.like)}>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Top;
