import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h2>Ошибка 404!</h2>
      <p>{error?.massage ?? "Неизвестная ошибка"}</p>
    </div>
  );
}

export default ErrorPage;
