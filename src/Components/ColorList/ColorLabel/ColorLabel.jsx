import React, { useEffect, useRef } from "react";
import style from "./ColorLabel.module.scss";
function ColorLabel({ color, check, handleColorChange, selectedColor }) {
  const colorRef = useRef(check);

  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color?.code);
  }, [color]);

  return (
    <label className={style.color} ref={colorRef}>
      <input
        className={style.input}
        type="radio"
        name="color"
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />
      <span className={style.colorCheck}></span>
    </label>
  );
}

export default ColorLabel;
