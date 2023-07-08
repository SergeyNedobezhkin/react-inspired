import React, { useEffect, useRef } from "react";
import style from "./Color.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../features/colorSlice";
import cn from "classnames";
import { NavLink } from "react-router-dom";

function Color({ color, check }) {
  // const dispatch = useDispatch();
  const colorCircleRef = useRef(check);

  const onChangeColor = (color, check) => {
    colorCircleRef.current.classList.toggle(style.colorCheck);
  };

  return (
    <li
      ref={colorCircleRef}
      style={{ backgroundColor: color }}
      className={check ? cn(style.color, style.colorCheck) : style.color}
      // className={style.color}
      onClick={() => onChangeColor(color, check)}
    >
      {/* {color} */}
    </li>
  );
}

export default Color;
