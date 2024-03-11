import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToFavorite } from "../../store/favoriteSlice";

const DetailProductLayout = (props) => {
  const { data, isLoading } = props;
  const dataCartRedux = useSelector((state) => state.cart.value);
  const dataFavoriteRedux = useSelector((state) => state.favorite.value);
  const findFavoriteRedux = dataFavoriteRedux.find(
    (item) => item.id === data.id
  );
  const findCartRedux = dataCartRedux.find((item) => item.id === data.id);
  const dispatch = useDispatch();
  
  return (
    <div className="container mx-auto pt-[80px]">
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
        <div className="card-title p-5">
          <p className="uppercase">Product Detail</p>
        </div>
        <hr className="bg-slate-500" />
        <div className="card-body">
          {isLoading ? (
            <div className="md:flex lg:flex text-center md:justify-center lg:justify-center font-sans md:h-52 lg:h-52">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            Object.keys(data).length > 0 && (
              <div className="md:flex lg:flex font-sans">
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
                <form className="flex-auto p-0 md:p-6 lg:p-6">
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
                        className="h-10 px-6 font-semibold rounded-md bg-[#EA94AB] hover:bg-[#CB8C9D] text-white"
                        type="button"
                        disabled={findCartRedux}
                        onClick={() => dispatch(addToCart(data))}
                      >
                        Add to cart
                      </button>
                    </div>
                    <button
                      className={`flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-[#EA94AB] ${
                        findFavoriteRedux ? "bg-rose-300" : ""
                      }`}
                      type="button"
                      aria-label="Like"
                      onClick={() => dispatch(addToFavorite(data))}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                        color={findFavoriteRedux ? "red" : "#EA94AB"}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-slate-700">
                    Free shipping on all continental US orders.
                  </p>
                </form>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProductLayout;
