import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor } from "../../features/colorSlice";
import { fetchNavigation } from "../../features/navigationSlice";

function ErrorPage() {
  const routeError = useRouteError();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === "/404") {
      navigate("/");
    }
  }, [navigate, status, location]);

  useEffect(() => {
    if (!status && location.pathname === "/404") {
      clearInterval(timerIdRef.current);
      timerIdRef.current = setInterval(() => {
        dispatch(fetchColor());
        dispatch(fetchNavigation());
      }, 5000);
    }
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [dispatch, status, location]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>Произошла ошибка, попробуйте зайти позже!</h2>
      <p className={style.massage}>
        {routeError?.massage ?? "Неизвестная ошибка"}
      </p>
    </div>
  );
}

export default ErrorPage;
