import React from "react";
import style from "./ColorList.module.scss";
import { useSelector } from "react-redux";
import Color from "./Color/Color";

function ColorList({ colors }) {
  const { colorList } = useSelector((state) => state.color);

  // console.log(colorList);
  // console.log(colors);

  return (
    <ul className={style.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
}

export default ColorList;
