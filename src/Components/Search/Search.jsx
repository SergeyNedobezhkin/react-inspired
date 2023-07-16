import React from "react";
import style from "./Search.module.scss";
import Container from "../Layout/Container/Container";

function Search({ openSearch }) {
  return (
    <div className={style.search}>
      <Container>
        {openSearch && (
          <form className={style.form}>
            <input
              className={style.input}
              type="search"
              name="search"
              placeholder="Поиск..."
            />
            <button className={style.btn} type="submit">
              Искать
            </button>
          </form>
        )}
      </Container>
    </div>
  );
}

export default Search;
