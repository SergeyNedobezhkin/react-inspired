import React, { useEffect } from "react";
import { ReactComponent as LikeSVG } from "../../assets/heart.svg";
import style from "./BtnLike.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../features/favoritesSlice";
import cn from "classnames";

function BtnLike({ id }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  useEffect(() => {}, []);

  return (
    <button
      className={isFavorite ? cn(style.like, style.active) : style.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  );
}

export default BtnLike;
