import { useEffect, useState } from "react";
import Button from "../Elements/Button/Button";
import Banner from "../Fragments/Banner";
import { getCategoriesProducts } from "../../services/product.service";
import Card from "../Fragments/Card";

const BannerLayout = () => {
  return (
    <div className="container mx-auto pt-[80px]">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/6">
          <Banner />
        </div>
        <div className="w-full lg:w-2/6">
          <div className="flex lg:flex-col md:items-center md:gap-1 lg:ml-1">
            <a href="http://">
              <img src="../../public/images/banner-1.png" alt="" />
            </a>
            <a href="http://">
              <img src="../../public/images/banner-2.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
