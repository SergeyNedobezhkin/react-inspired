import React, { useEffect } from "react";
import style from "./Main.module.scss";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

function Main({ children }) {
  const { status } = useSelector((state) => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status && location.pathname !== "/404") {
      navigate("/404");
    }
  }, [navigate, status, location]);
  return <div className={style.main}>{children}</div>;
}

export default Main;
