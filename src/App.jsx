import React, { useEffect } from "react";
import MainPage from "./Components/MainPage/MainPage";
import Root from "./routes/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColor } from "./features/colorSlice";
import ProductPage from "./Components/ProductPage/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColor());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
