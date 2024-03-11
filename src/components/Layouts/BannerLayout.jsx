import Banner from "../Fragments/Banner";
import banner1 from "@/banner-1.png";
import banner2 from "@/banner-2.jpg";

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
              <img src={banner1} alt="" />
            </a>
            <a href="http://">
              <img src={banner2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
