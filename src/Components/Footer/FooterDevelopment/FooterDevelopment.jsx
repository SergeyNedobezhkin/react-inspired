import React from "react";
import style from ".././Footer.module.scss";

function FooterDevelopment() {
  return (
    <div className={style.development}>
      <ul className={style.developmentList}>
        <li>Designer: Anastasia Ilina</li>
        <li>
          Developer:{" "}
          <a className={style.link} href="https://t.me/Bodrov63">
            Nedobezhkin Sergey
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterDevelopment;
