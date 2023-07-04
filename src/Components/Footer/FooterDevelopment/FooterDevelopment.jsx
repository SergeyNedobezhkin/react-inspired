import React from "react";
import style from ".././Footer.module.scss";

function FooterDevelopment() {
  return (
    <div className={style.development}>
      <ul className={style.developmentList}>
        <li>Designer: Anastasia Ilina</li>
        <li>Developer: Nedobezhkin Sergey</li>
      </ul>
    </div>
  );
}

export default FooterDevelopment;
