import React from "react";
import style from "./Main.module.scss";

function Main({ children }) {
  return <div className={style.main}>{children}</div>;
}

export default Main;
