import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice.js";
import Gender from "./Gender/Gender.jsx";
import Category from "./Category/Category.jsx";
import Container from "../../Layout/Container/Container.jsx";

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const gender = location.pathname.split("/")[1] || "women";

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

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
