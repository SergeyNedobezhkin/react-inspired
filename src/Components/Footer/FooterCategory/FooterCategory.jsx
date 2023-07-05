import React from "react";
import style from ".././Footer.module.scss";
import cn from "classnames";

function FooterCategory() {
  return (
    <div className={style.category}>
      <h3 className={cn(style.categoryTitle, style.title)}>Каталог</h3>
      <div className={style.categoryList}>
        <div>
          <h4 className={style.categorySubtitle}>Женщины</h4>
          <ul className={style.categorySublist}>
            <li className={style.link}>Бюстгальтеры</li>
            <li className={style.link}>Трусы</li>
            <li className={style.link}>Носки</li>
            <li className={style.link}>Халаты</li>
            <li className={style.link}>Термобелье</li>
            <li className={style.link}>Пижамы</li>
          </ul>
        </div>
        <div>
          <h4 className={style.categorySubtitle}>Мужчины</h4>
          <ul className={style.categorySublist}>
            <li className={style.link}>Трусы</li>
            <li className={style.link}>Носки</li>
            <li className={style.link}>Халаты</li>
            <li className={style.link}>Термобелье</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterCategory;
