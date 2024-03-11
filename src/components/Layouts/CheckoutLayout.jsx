import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";

const CheckoutLayout = () => {
  const dataDariRedux = useSelector((state) => state.cart.value);
  const dataCheckout = dataDariRedux.filter((item) => item.checked === true);

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya ingin memesan: \n\n${dataCheckout
      .map((item) => `- ${item.title} (${item.quantity} x $${item.price})`)
      .join("\n")}\n\nTotal Pembayaran: $${dataCheckout.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )}`;
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6282269356724";

    // Redirect ke aplikasi WhatsApp dengan tautan deep linking
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <>
      <div className="container mx-auto pt-[80px]">
        <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
          <div className="card-title p-5">
            <p className="uppercase">Checkout</p>
          </div>
          <hr className="bg-slate-500" />
        </div>
        <div className="card w-100 bg-slate-100 rounded-md shadow-xl mt-3">
          <div className="card-body p-5">
            <div className="flex flex-row items-center">
              <div className="w-full md:w-6/12 lg:w-6/12">
                <label className="font-bold text-lg">Produk Dipesan</label>
              </div>
              <div className="w-2/12 hidden md:inline lg:inline text-center">
                <label>Harga Satuan</label>
              </div>
              <div className="w-2/12 hidden md:inline lg:inline text-center">
                <label>Kuantitas</label>
              </div>
              <div className="w-2/12 hidden md:inline lg:inline text-center">
                <label>Total Harga</label>
              </div>
            </div>
          </div>
          <div className="card-body p-5">
            {dataCheckout.map((value) => (
              <div
                className=" flex flex-row border p-3 border-slate-500 rounded-lg hover:bg-slate-200 md:items-center lg:items-center"
                key={value.id}
              >
                <div className="flex w-6/12">
                  <img
                    src={value.image}
                    className="w-24 h-24 md:w-10 md:h-10 lg:w-10 lg:h-10"
                    alt={value.title}
                  />
                  <p className="ml-3 hidden md:inline lg:inline">
                    {value.title}
                  </p>
                </div>
                <div className="w-9/12 md:hidden lg:hidden md:w-2/12 lg:w-2/12">
                  <p className="ml-3 text-xs">{value.title}</p>
                  <div className="flex ml-3 mt-5">
                    <p className="text-sm">$ {value.price}</p>
                    <p className="text-end text-sm px-2">x {value.quantity}</p>
                  </div>
                </div>
                <div className="w-2/12 hidden md:inline lg:inline text-center">
                  <p>$ {value.price}</p>
                </div>
                <div className="w-2/12 hidden md:inline lg:inline text-center">
                  <p>{value.quantity}</p>
                </div>
                <div className="w-2/12 hidden md:inline lg:inline text-center">
                  <p>$ {value.price * value.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card w-100 bg-slate-100 rounded-md shadow-xl mt-3">
            <div className="card-body p-5">
              <div className="flex justify-end items-center">
                <div className="w-8/12 md:text-center lg:text-center">
                  <div className="text-xs md:text-xl lg:text-xl">
                    Total Pembayaran ({dataCheckout.length} Produk) :{" "}
                    <span className="text-rose-400">
                      ${" "}
                      {dataCheckout.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </div>
                <div className="w-4/12 flex justify-end items-center gap-8">
                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={dataCheckout.length === 0}
                    className={`w-full md:w-44 lg:w-44 md:px-3 py-1 md:py-2 lg:px-3 lg:py-2 text-xs md:text-lg lg:text-lg bg-[#EA94AB] hover:bg-[#CB8C9D] ${
                      dataCheckout.length === 0 ? "cursor-not-allowed" : ""
                    }hover:bg-[#9c513c] rounded-sm text-slate-200`}
                  >
                    <FaWhatsapp className="inline text-xl mb-1" /> Buat Pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLayout;
