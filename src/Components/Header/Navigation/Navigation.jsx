import React from "react";
import Gender from "./Gender/Gender.jsx";
import Category from "./Category/Category.jsx";
import Container from "../../Layout/Container/Container.jsx";

function Navigation() {
  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
}

export default Navigation;
