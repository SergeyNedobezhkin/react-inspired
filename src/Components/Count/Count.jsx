import React from "react";
import style from "./Count.module.scss";
import cn from "classnames";
import classNames from "classnames";

function Count({ count, handleIncrement, handleDecrement }) {
  return (
    <div className={cn(style.count, classNames)}>
      <button className={style.item} type="button" onClick={handleDecrement}>
        -
      </button>
      <span className={cn(style.item, style.number)}>{count}</span>
      <button className={style.item} type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Count;
