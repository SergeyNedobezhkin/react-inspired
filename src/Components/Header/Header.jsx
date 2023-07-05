import React from "react";
import Top from "./Top/Top.jsx";
import Navigation from "./Navigation/Navigation.jsx";

function Header({ list }) {
  return (
    <header>
      <Top />
      <Navigation list={list} />
    </header>
  );
}

export default Header;
