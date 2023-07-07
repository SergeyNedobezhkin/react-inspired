import React from "react";
import style from ".././Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function FooterCategory() {
  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation
  );

  return (
    <div className={style.category}>
      <h3 className={cn(style.categoryTitle, style.title)}>Каталог</h3>
      <ul className={style.categoryList}>
        {genderList.map((gender) => (
          <li key={gender} className={style.categoryItem}>
            <h3 className={style.categorySubtitle}>
              <NavLink
                className={({ isActive }) =>
                  cn(style.link, isActive && style.linkActive)
                }
                to={gender}
              >
                {categories[gender].title}
              </NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {categories[gender].list.map((category) => (
                <li key={category.slug}>
                  <NavLink
                    to={`${gender}/${category.slug}`}
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
