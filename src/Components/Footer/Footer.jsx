import React from "react";
import style from "./Footer.module.scss";
import FooterCategory from "./FooterCategory/FooterCategory";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterDevelopment from "./FooterDevelopment/FooterDevelopment";
import FooterSocial from "./FooterSocial/FooterSocial";
import Container from "../Layout/Container/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={style.container}>
          <FooterCategory />
          <FooterContacts />
          <FooterSocial />
          <FooterCopyright />
          <FooterDevelopment />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
