import React from "react";
import style from "./Search.module.scss";
import Container from "../Layout/Container/Container";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";

function Search({ openSearch }) {
  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object({
    search: Yup.string().required("Поле обязательно для заполнения"),
  });
  const navigate = useNavigate();

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
    }
  };

  return (
    <div className={style.search}>
      <Container>
        {openSearch && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={style.form}>
              <Field
                className={style.input}
                type="search"
                name="search"
                placeholder="Поиск..."
              />
              <ErrorMessage
                name="search"
                component={"p"}
                className={style.error}
              />
              <button className={style.btn} type="submit">
                Искать
              </button>
            </Form>
          </Formik>
        )}
      </Container>
    </div>
  );
}

export default Search;
