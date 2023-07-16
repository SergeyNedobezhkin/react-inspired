import React, { useState } from "react";
import Top from "./Top/Top.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import style from "./Header.module.scss";
import Search from "../Search/Search.jsx";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <header className={style.header}>
      <Top openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Search openSearch={openSearch} />
      <Navigation />
    </header>
  );
}

export default Header;
