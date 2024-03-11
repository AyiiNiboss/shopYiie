import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
const FooterLayout = () => {
  const pembayaran = [
    {
      id: 1,
      img: "https://down-id.img.susercontent.com/file/5589c755ab085d2fac3e33f4755c6a9e",
    },
    {
      id: 2,
      img: "https://down-id.img.susercontent.com/file/49656d7100598b911a1f247dec64fda4",
    },
    {
      id: 3,
      img: "https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154",
    },
    {
      id: 4,
      img: "https://down-id.img.susercontent.com/file/59185c096964e1892e9122ceaae2609d",
    },
    {
      id: 5,
      img: "https://down-id.img.susercontent.com/file/9a08d3abab3dd059fff945c72ca372d9",
    },
    {
      id: 6,
      img: "https://down-id.img.susercontent.com/file/780c2be80e523384a7320b89f42008d5",
    },
    {
      id: 7,
      img: "https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73",
    },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#88a7c9] to-[#e7a8bb] px-10 pt-20 mt-[25vh] shadow-xl">
      <div className="">
        <div className="container mx-auto">
          <div className="w-full md:flex lg:flex justify-center">
            <div className="w-full md:w-2/12 lg:w-2/12">
              <p className="mb-3 font-semibold text-sm">Kategori</p>
              <ul className="px-2 text-sm">
                <li className="mb-2">
                  <Link to={"/products/category/electronics"}>Electronics</Link>
                </li>
                <li className="mb-2">
                  <Link to={"/products/category/jewelery"}>Jewelery</Link>
                </li>
                <li className="mb-2">
                  <Link to={"/products/category/men's clothing"}>
                    Men's Clothing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"/products/category/women's clothing"}>
                    Women's Clothing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/12 lg:w-2/12 mb-3">
              <p className="mb-3 font-semibold text-sm">Pembayaran</p>
              <ul className="flex flex-wrap gap-1 px-2">
                {pembayaran.map((item) => (
                  <li
                    className="w-1/5 md:w-1/4 lg:w-1/4 bg-slate-100 shadow-sm"
                    key={item.id}
                  >
                    <img className="w-full" src={item.img} alt={item.id} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-4/12 lg:w-4/12 mb-3">
              <p className="mb-3 font-semibold text-sm">Ikuti Kami</p>
              <ul className="px-2 flex flex-wrap md:block md:flex-nowrap lg:block lg:flex-nowrap gap-2">
                <li className="mb-2">
                  <Link className="flex items-center gap-1">
                    <FaFacebook /> <span className="text-sm">Facebook</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center gap-1">
                    <FaInstagram /> <span className="text-sm">Instagram</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center gap-1">
                    <FaTwitterSquare /> <span className="text-sm">Twitter</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center gap-1">
                    <FaLinkedin /> <span className="text-sm">LinkedIn</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center gap-1">
                    <FaWhatsapp /> <span className="text-sm">WhatsApp</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="container mx-auto border-t border-slate-500">
          <div className="p-5">
            <p className="text-center text-sm">
              Copyright © 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
