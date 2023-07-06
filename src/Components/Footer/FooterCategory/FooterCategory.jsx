import React from "react";
import style from ".././Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function FooterCategory({ list }) {
  const { activeGender, categories } = useSelector((state) => state.navigation);

  return (
    <div className={style.category}>
      <h3 className={cn(style.categoryTitle, style.title)}>Каталог</h3>
      <ul className={style.categoryList}>
        {list.map((item) => (
          <li key={item.link} className={style.categoryItem}>
            <h3 className={style.categorySubtitle}>
              <NavLink
                className={({ isActive }) =>
                  cn(style.link, isActive && style.linkActive)
                }
                to={`${activeGender}/${item.slug}`}
              >
                {item.title}
              </NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {item.categories.map((category) => (
                <li key={category.link}>
                  <NavLink
                    to={`${activeGender}/${category.link}`}
                    className={({ isActive }) =>
                      cn(style.link, isActive && style.linkActive)
                    }
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
