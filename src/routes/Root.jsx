import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Layout/Main/Main";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Root;
