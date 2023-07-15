import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGender, fetchGoods } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import Goods from "../Goods/Goods";
import Banner from "../Banner/Banner";
import { usePageFromSearchParams } from "../hooks/usePageFromSearchParams";

function MainPage() {
  const dispatch = useDispatch();
  const { category, gender } = useParams();
  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation
  );
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find((item) => item.slug === category);
  const page = usePageFromSearchParams(dispatch);

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
      const params = { gender, category };
      if (page) {
        params.page = page;
      }
      dispatch(fetchGoods(params));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, dispatch, page, category]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title} />
    </>
  );
}

export default MainPage;
