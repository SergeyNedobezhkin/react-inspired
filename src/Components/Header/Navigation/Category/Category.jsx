import React from "react";
import style from "./Category.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

function Category({ list }) {
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "women";
  const categoriesList = list.find((item) => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
            to={`${gender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Category;
