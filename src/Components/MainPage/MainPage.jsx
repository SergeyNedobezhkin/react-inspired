import React, { useEffect } from "react";
import style from "./MainPage.module.scss";
import { useParams } from "react-router-dom";
import Container from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../features/colorSlice";

function MainPage({ gender = "women" }) {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);

  useEffect(() => {
    dispatch(setColor(colorList));
  }, [colorList, dispatch]);

  return (
    <Container>
      <div>MainPage {gender}</div>
      {category && <p>Категория: {category}</p>}
    </Container>
  );
}

export default MainPage;
