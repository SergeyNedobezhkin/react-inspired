import React, { useEffect, useRef } from "react";
import style from "./Color.module.scss";
import cn from "classnames";

function Color({ color, check }) {
  const colorRef = useRef(check);
  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color);
  }, [color]);

  return (
    <li
      ref={colorRef}
      className={cn(style.color, check ? style.colorCheck : "")}
    ></li>
  );
}

export default Color;
