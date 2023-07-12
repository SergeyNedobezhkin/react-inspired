import React from "react";
import style from "./ColorList.module.scss";
import { useSelector } from "react-redux";
import Color from "./Color/Color";
import ColorLabel from "./ColorLabel/ColorLabel";

function ColorList({ colors, selectedColor, handleColorChange }) {
  const { colorList } = useSelector((state) => state.color);

  return handleColorChange ? (
    <div className={style.colorList}>
      {colors?.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return (
          <ColorLabel
            key={id}
            color={color}
            check={!i}
            handleColorChange={handleColorChange}
            selectedColor={selectedColor}
          />
        );
      })}
    </div>
  ) : (
    <ul className={style.colorList}>
      {colors?.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
}

export default ColorList;
