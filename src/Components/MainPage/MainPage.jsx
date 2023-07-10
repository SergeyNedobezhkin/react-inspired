import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGender, fetchCategory } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import Goods from "../../Goods/Goods";
import Banner from "../Banner/Banner";

function MainPage() {
  const dispatch = useDispatch();
  const { category, gender } = useParams();
  const { activeGender, categories } = useSelector((state) => state.navigation);
  const genderData = categories[activeGender];

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, dispatch, category]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods
        categoryData={genderData?.list.find((item) => item.slug === category)}
      />
    </>
  );
}

export default MainPage;
