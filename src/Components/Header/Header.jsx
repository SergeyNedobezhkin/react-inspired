import React from "react";
import Top from "./Top/Top.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <Top />
      <Navigation />
    </header>
  );
}

export default Header;
