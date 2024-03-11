import { useParams } from "react-router-dom";
import DetailProductLayout from "../components/Layouts/DetailProductLayout";
import NavbarLayout from "../components/Layouts/NavbarLayout";
import { useEffect, useState } from "react";
import { getProductDetail } from "../services/product.service";
import FooterLayout from "../components/Layouts/FooterLayout";

const DetailProductPage = () => {
  const { id } = useParams();
  const [ isLoading, setIsLoading ] = useState(false);
  const [detailProduct, setDetailProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    getProductDetail(id, (data) => {
      setDetailProduct(data);
      setIsLoading(false);
    });
  }, [id]);
  return (
    <>
      <NavbarLayout />
      <DetailProductLayout data={detailProduct} isLoading={isLoading} />
      <FooterLayout />
    </>
  );
};

export default DetailProductPage;
