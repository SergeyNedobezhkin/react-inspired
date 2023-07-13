import React from "react";
import style from "./Pagination.module.scss";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { setPage } from "../../features/goodsSlice";

function Pagination() {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goods);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };
  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(startPage + 2, pages);
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li className={style.item} key={i}>
          <NavLink
            className={cn(style.link, i === +page ?? style.linkActive)}
            onClick={() => handlePageChange(i)}
            to={`${pathname}?page=${i}`}
          >
            {i}
          </NavLink>
        </li>
      );
    }
    return paginationItems;
  };
  return (
    <div className={style.pagination}>
      <button
        className={style.arrow}
        onClick={handlePrevPage}
        disabled={page <= 2}
      >
        &lt;
      </button>
      <ul className={style.list}>{renderPaginationItems()}</ul>

      <button
        className={style.arrow}
        onClick={handleNextPage}
        disabled={page >= pages - 1 || pages <= 3}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
