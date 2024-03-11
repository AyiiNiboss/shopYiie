import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart, sumTotalCart } from "../../store/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartLayout = () => {
  const dataDariRedux = useSelector((state) => state.cart.value);
  const filter = dataDariRedux.filter((item) => item.checked === true)
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto pt-[80px]">
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
        <div className="card-title p-5">
          <p className="uppercase">Cart</p>
        </div>
        <hr className="bg-slate-500" />
      </div>
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl mt-3 hidden md:flex lg:flex">
        <div className="card-body p-5">
          <div className="md:flex md:flex-row lg:flex lg:flex-row items-center">
            <div className="w-2/12">
              <label className="flex items-center">
              </label>
            </div>
            <div className="w-3/12">
              <label>Product</label>
            </div>
            <div className="w-2/12 text-center">
              <label>Harga Satuan</label>
            </div>
            <div className="w-2/12 text-center">
              <label>Kuantitas</label>
            </div>
            <div className="w-2/12 text-center">
              <label>Total Harga</label>
            </div>
            <div className="w-2/12 text-center">
              <label>Aksi</label>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl mt-3">
        <div className="card-body p-5">
          {dataDariRedux.map((value) => (
            <div
              className=" flex flex-row border p-3 border-slate-500 rounded-lg hover:bg-slate-200 items-center "
              key={value.id}
            >
              <div className="w-1/12">
                <label className="flex items-center">
                  <input type="checkbox" checked={value.checked} onChange={() =>{ dispatch(sumTotalCart({id: value.id, checked: !value.checked}))} } className="checkbox" />
                </label>
              </div>
              <div className="w-3/12 md:w-3/12 lg:w-3/12 flex">
                <img
                  src={value.image}
                  className="w-20 h-20 md:w-10 md:h-10 lg:w-10 lg:h-10"
                  alt={value.title}
                />
                <p className="ml-3 hidden md:inline lg:inine">{value.title}</p>
              </div>
              <div className="w-8/12 md:w-2/12 lg:w-3/12 md:text-center lg:text-center">
                <p className="block md:hidden lg:hidden ml-3 text-xs">{value.title.substring(0, 32)}<span className="position-absolute bg-white opacity-50">...</span></p>
                <p className="block ml-3 mt-3 text-xs md:text-lg lg:text-lg md:text-center lg:text-center">$ {value.price}</p>
                <div className="ml-3 mt-3 text-xs md:hidden lg:hidden">
                  <button
                    className="px-2 py-1 bg-slate-400"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: value.id,
                          quantity: Math.max(0, value.quantity - 1),
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    className="w-5 py-1 text-center"
                    type="text"
                    value={value.quantity}
                    readOnly
                  />
                  <button
                    className="px-2 py-1 bg-slate-400"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: value.id,
                          quantity: value.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <p className="ml-3 mt-3 text-xs text-end md:hidden lg:hidden">Sub Total : $ {value.price * value.quantity}</p>
              </div>
              <div className="hidden md:inline lg:inline w-2/12 text-center">
                <div>
                  <button
                    className="px-3 py-1 bg-slate-400"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: value.id,
                          quantity: Math.max(0, value.quantity - 1),
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    className="w-10 py-1 text-center"
                    type="text"
                    value={value.quantity}
                    readOnly
                  />
                  <button
                    className="px-3 py-1 bg-slate-400"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: value.id,
                          quantity: value.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:inline lg:inline w-2/12 text-center">
                <p>$ {value.price * value.quantity}</p>
              </div>
              <div className="hidden md:inline lg:inline w-2/12 text-center">
                <button onClick={() => dispatch(deleteCart(value.id))}>
                  <p>Hapus</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl mt-3">
        <div className="card-body p-5">
          <div className="flex justify-end items-center">
            <div className="w-6/12 text-start">
              <div className="text-sm md:text-xl lg:text-xl">
                Total ({filter.length} Produk) :{" "}
                <span className="text-rose-400">$ {filter.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
              </div>
            </div>
            <div className="w-6/12 text-end">
              <Link to={"/checkout"} style={{ pointerEvents: filter.length === 0 ? "none" : "auto"}} className={`w-full px-3 py-2 bg-[#EA94AB] hover:bg-[#CB8C9D] ${filter.length === 0 ? "cursor-not-allowed " : ""} rounded-sm text-slate-200`}>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
