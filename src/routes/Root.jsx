import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Layout/Main/Main";
import { Outlet } from "react-router-dom";

const list = [
  {
    link: "women",
    title: "Женщины",
    categories: [
      { link: "bras", title: "Бюстгалтеры" },
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
      { link: "pijamas", title: "Пижамы" },
    ],
  },
  {
    link: "men",
    title: "Мужчины",
    categories: [
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
    ],
  },
];

function Root() {
  return (
    <>
      <Header list={list} />
      <Main>
        <Outlet />
      </Main>
      <Footer list={list} />
    </>
  );
}

export default Root;
