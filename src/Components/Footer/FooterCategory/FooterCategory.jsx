import React from "react";
import style from ".././Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";

function FooterCategory({ list }) {
  return (
    <div className={style.category}>
      <h3 className={cn(style.categoryTitle, style.title)}>Каталог</h3>
      <ul className={style.categoryList}>
        {list.map((item) => (
          <li key={item.link} className={style.categoryItem}>
            <h3 className={style.categorySubtitle}>
              <NavLink to={item.link} className={style.link}>
                {item.title}
              </NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {item.categories.map((category) => (
                <li key={category.link}>
                  <NavLink
                    to={`${item.link}/${category.link}`}
                    className={style.link}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCategory;
