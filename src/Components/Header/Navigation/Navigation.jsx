import React from "react";
import Gender from "./Gender/Gender.jsx";
import Category from "./Category/Category.jsx";
import Container from "../../Layout/Container/Container.jsx";

function Navigation({ list }) {
  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  );
}

export default Navigation;
