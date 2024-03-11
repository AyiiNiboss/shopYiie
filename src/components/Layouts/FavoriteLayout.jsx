import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { removeFavorite } from "../../store/favoriteSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import logoNotFound from "@/product_not_found.png"

const FavoriteLayout = () => {
  const dispatch = useDispatch();
  const dataFavorite = useSelector((state) => state.favorite.value);
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    dispatch(removeFavorite(data));
  };

  return (
    <div className="container mx-auto pt-[80px]">
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
        <div className=" md:flex lg:flex items-center pb-5 md:pb-0 lg:pb-0">
          <div className="card-title p-5 w-full md:w-1/2 lg:1/2">
            <p className="uppercase">Favorite</p>
          </div>
        </div>
        <hr className="bg-slate-500" />
        <div className={`card-body p-10}`}>
          {dataFavorite.length > 0 ? (
            dataFavorite.map((data) => (
              <div
                className="md:flex lg:flex font-sans border-b-2"
                key={data.id}
              >
                <div className="flex flex-col mb-4 md:mb-0 lg:mb-0">
                  <div className="lg:w-64 md:w-64 w-full border border-slate-300 md:p-6 lg:p-6">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full bg-auto"
                      loading="lazy"
                    />
                  </div>
                  <div></div>
                </div>
                <form className="flex-auto md:p-6 lg:p-6">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                      {data.title}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                      $ {data.price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                      In stock
                    </div>
                    <div className="w-full flex items-center text-sm font-medium text-slate-700 mt-2 gap-3">
                      <div>{data.rating.rate}</div>
                      <div>
                        {data.rating.count}{" "}
                        <span className="text-sm text-slate-400">
                          Penilaian
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-baseline mt-4 mb-6 pb-6 mr-3 border-b border-slate-200">
                    <p className="text-sm md:text-base lg:text-base">{data.description}</p>
                  </div>
                  <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                      <button
                        className="h-10 px-6 font-semibold rounded-md border bg-[#EA94AB] hover:bg-[#CB8C9D] text-slate-100"
                        type="button"
                        onClick={() => handleAddToCart(data)}
                      >
                        Add to cart
                      </button>
                      <button
                        className="h-10 px-6 font-semibold rounded-md border bg-[#EA94AB] hover:bg-[#CB8C9D] text-slate-100 text-xl"
                        onClick={() => dispatch(removeFavorite(data))}
                      >
                        <MdOutlineDeleteOutline />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-500 pb-7 md:pb-10 lg:pb-10">
              <img
                src={logoNotFound}
                className="w-44 md:w-72 lg:w-72 mx-auto"
                alt=""
              />
              <div className="text-xs md:text-sm lg:text-lg">
                <p>Upps!! belum ada satupun barang difavorite anda</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteLayout;
