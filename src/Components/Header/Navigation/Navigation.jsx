import React from "react";
import Gender from "./Gender/Gender.jsx";
import Category from "./Category/Category.jsx";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  );
}

export default Navigation;
