import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../../store/searchSlice";
import { BiSearch } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import logoNotFound from "@/product_not_found.png"

const ProductLayout = (props) => {
  const { isLoading, categories } = props;
  const dispatch = useDispatch();
  const [searchTerm, setSearchTermLocal] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTermLocal(value);
    dispatch(setSearchTerm(value));
  };
  const dataProductRedux = useSelector((state) => state.search.value);
  const dataSearchRedux = useSelector((state) => state.search.valueSearch);
  const searchTermRedux = useSelector((state) => state.search.searchTerm);
  const productRef = useRef(null);
  useEffect(() => {
    if (categories) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);
  const handleRefreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
    window.location.href = "/products";
  };
  return (
    <div className="container mx-auto mt-3" ref={productRef}>
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
        <div className=" md:flex lg:flex items-center pb-5 md:pb-0 lg:pb-0">
          <div className="card-title p-5 w-full md:w-1/2 lg:1/2">
            <p className="uppercase">Products</p>
          </div>
          <div className="md:w-1/2 lg:w-1/2 flex items-center justify-center md:justify-end lg:justify-end gap-3 px-5">
            <Link
              onClick={handleRefreshPage}
              className="text-xl opacity-50"
              title="Refresh"
            >
              <IoMdRefresh className={`${isLoading ? "animate-spin" : ""}`} />
            </Link>
            <label
              htmlFor="search"
              className="flex justify-end items-center w-9/12 md:w-7/12 lg:w-7/12 px-3 py-2 bg-slate-200"
            >
              <input
                id="search"
                type="text"
                placeholder="Search"
                className="w-full bg-slate-200 border-none focus:outline-none px-1"
                onChange={handleInputChange}
              />
              <BiSearch />
            </label>
          </div>
        </div>
        <hr className="bg-slate-500" />
        <div className="card-body">
          {isLoading ? (
            <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap items-center justify-center text-center">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap justify-center gap-4">
              {(searchTermRedux ? dataSearchRedux : dataProductRedux).length >
              0 ? (
                (searchTermRedux ? dataSearchRedux : dataProductRedux).map(
                  (value) => (
                    <Link to={`/product/${value.id}`} key={value.id}>
                      <div className="mb-2 border-2 border-slate-200 bg-[#88a7c9] hover:bg-[#F0B0C1] text-slate-200 hover:text-slate-800 rounded-lg flex flex-col justify-center p-5">
                        <div className="">
                          <img
                            src={value.image}
                            className="p-5 h-60 lg:w-60 md:w-60 w-full object-cover"
                            alt={value.title}
                          />
                        </div>
                        <div>
                          <h2 className="inline-block text-base card-title uppercase">
                            {value.title.substring(0, 20)}
                          </h2>
                          <div className="flex justify-between items-center mt-5">
                            <div>
                              <p> $ {value.price}</p>
                            </div>
                            <div className="text-sm">
                              Rating{" "}
                              <span className="text-red-500 font-bold">
                                {value.rating.rate}
                              </span>{" "}
                              dari {value.rating.count}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )
              ) : (
                <div className="text-center text-slate-500 pb-5 md:pb-10 lg:pb-10">
                  <img
                    src={logoNotFound}
                    className="w-1/3 mx-auto"
                    alt=""
                  />
                  <div className="text-xs md:text-sm lg:text-lg">
                    <p>Hasil tidak ditemukan</p>
                    <p>Mohon coba kata kunci yang lain atau yang lebih umum</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
