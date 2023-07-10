import React from "react";
import style from "./Banner.module.scss";
import Container from "../Layout/Container/Container";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../const";

function Banner({ data }) {
  return (
    data && (
      <section
        className={style.banner}
        style={{
          backgroundImage: `url(${API_URL}/${data.bg.desktop})`,
        }}
      >
        <Container>
          <div className={style.content}>
            <h2 className={style.title}>{data.description}</h2>
            <NavLink className={style.link} to={`/product/${data.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
}

export default Banner;
