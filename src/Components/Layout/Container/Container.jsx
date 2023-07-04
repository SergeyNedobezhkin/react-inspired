import React from "react";
import cn from "classnames";
import style from "./Container.module.scss";

function Container({ className, children }) {
  return <div className={cn(style.container, className)}>{children}</div>;
}

export default Container;
