import React from "react";
import style from ".././Footer.module.scss";
import cn from "classnames";

function FooterCategory() {
  return (
    <div>
      <div className={cn(style.categoryTitle, style.title)}>Каталог</div>
      <div className={style.categoryList}>
        <ul className={style.categorySublist}>
          <li className={style.categorySubtitle}>Женщины</li>
          <li className={style.link}>Бюстгальтеры</li>
          <li className={style.link}>Трусы</li>
          <li className={style.link}>Носки</li>
          <li className={style.link}>Халаты</li>
          <li className={style.link}>Термобелье</li>
          <li className={style.link}>Пижамы</li>
        </ul>
        <ul className={style.categorySublist}>
          <li className={style.categorySubtitle}>Мужчины</li>
          <li className={style.link}>Трусы</li>
          <li className={style.link}>Носки</li>
          <li className={style.link}>Халаты</li>
          <li className={style.link}>Термобелье</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterCategory;
