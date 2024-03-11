import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Navbar = () => {
  const dataUser = useSelector((state) => state.user.value);
  const dataCartRedux = useSelector((state) => state.cart.value);
  const dataFavoriteRedux = useSelector((state) => state.favorite.value)
  return (
    <>
      <div className="container mx-auto">
        <div className="flex-1 items-center">
          <a className="">
            <img src="../../public/images/shoyii.png" className="w-32 md:w-52 lg:w-52" alt="" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className="dropdown dropdown-end" title="Favorite">
            <Link to={"/favorite"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <IoLibraryOutline className="text-lg text-slate-200" />
                  <span className="badge badge-sm indicator-item">
                    {dataFavoriteRedux.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="dropdown dropdown-end" title="Cart">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {dataCartRedux.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {dataCartRedux.length} Items
                </span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn bg-[#EA94AB] hover:bg-[#CB8C9D] btn-block text-slate-100">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="w-10 aspect-square rounded-full bg-slate-500 flex justify-center items-center text-slate-200 text-md">
                {dataUser.name.firstname.slice(0, 1).toUpperCase()}
                {dataUser.name.lastname.slice(0, 1).toUpperCase()}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to={"/setting"}>Settings</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
