import React from "react";
import style from "./Category.module.scss";
import { NavLink, useLocation } from "react-router-dom";

function Category({ list }) {
  const location = useLocation();
  const item = list.map((item) => item);
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.link}>
            <ul className={style.category}>
              {item.categories.map((category) => (
                <li key={category.link}>
                  {location.pathname === `/women` && (
                    <NavLink
                      to={`${item.link}/${category.link}`}
                      className={style.link}
                    >
                      {item.link === "women" && category.title}
                    </NavLink>
                  )}
                  {location.pathname === `/men` && (
                    <NavLink
                      to={`${item.link}/${category.link}`}
                      className={style.link}
                    >
                      {item.link === "men" && category.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
