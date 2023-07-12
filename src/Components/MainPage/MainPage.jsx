import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGender, fetchCategory } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import Goods from "../Goods/Goods";
import Banner from "../Banner/Banner";

function MainPage() {
  const dispatch = useDispatch();
  const { category, gender } = useParams();
  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation
  );
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find((item) => item.slug === category);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

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
      <Goods categoryData={categoryData} />
    </>
  );
}

export default MainPage;
