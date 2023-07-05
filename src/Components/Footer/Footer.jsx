import React from "react";
import style from "./Footer.module.scss";
import FooterCategory from "./FooterCategory/FooterCategory";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterDevelopment from "./FooterDevelopment/FooterDevelopment";
import FooterSocial from "./FooterSocial/FooterSocial";

function Footer() {
  return (
    <footer className={style.container}>
      <FooterCategory />
      <FooterContacts />
      <FooterSocial />
      <FooterCopyright />
      <FooterDevelopment />
    </footer>
  );
}

export default Footer;
