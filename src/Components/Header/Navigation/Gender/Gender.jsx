import React from "react";
import style from "./Gender.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

function Gender({ list }) {
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "women";
  return (
    <ul className={style.gender}>
      {list.map((item) => (
        <li key={item.categories} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cn(
                style.link,
                (isActive || gender === item.link) && style.linkActive
              )
            }
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Gender;
