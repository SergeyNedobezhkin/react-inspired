import React from "react";
import style from ".././Footer.module.scss";

function FooterContacts() {
  return (
    <div className={style.contacts}>
      <a className={style.link} href="mailto:Inspired@gmail.com">
        Inspired@gmail.com
      </a>
      <a className={style.link} href="tel:89304902620">
        8 930 490 26 20
      </a>
    </div>
  );
}

export default FooterContacts;
