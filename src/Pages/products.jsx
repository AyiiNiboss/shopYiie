import { useEffect, useRef, useState } from "react";
import BannerLayout from "../components/Layouts/BannerLayout";
import CategoriesLayout from "../components/Layouts/CategoriesLayout";
import NavbarLayout from "../components/Layouts/NavbarLayout";
import ProductLayout from "../components/Layouts/ProductLayout";
import {
  getProductByCategories,
  getProducts,
} from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { useParams } from "react-router-dom";
import FooterLayout from "../components/Layouts/FooterLayout";
import { useDispatch } from "react-redux";
import { setCategory, setProducts } from "../store/searchSlice";
// import persistStore from "redux-persist/es/persistStore";
// import { detailUser } from "../store/userSlice";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { categories } = useParams();
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  useLogin();
  useEffect(() => {
    setIsLoading(true);
    if (categories) {
      getProductByCategories(categories, (data) => {
        dispatch(setCategory(data));
        setIsLoading(false);
      });
    } else {
      getProducts((data) => {
        dispatch(setProducts(data));
        setIsLoading(false);
      });
    }
  }, [categories]);
  return (
    <>
      <NavbarLayout />
      <BannerLayout />
      <CategoriesLayout />
      <ProductLayout categories={categories} isLoading={isLoading} />
      <FooterLayout />
    </>
  );
};

export default ProductPage;
