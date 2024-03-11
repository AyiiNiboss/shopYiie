import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Navbar from "../Fragments/Navbar";
import { getDetailUser } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { detailUser } from "../../store/userSlice";


const NavbarLayout = () => {
  const dispatch = useDispatch();
  const id = useLogin();
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    if (id) {
      getDetailUser(id, (data) => {
        setUserDetail(data);
        dispatch(detailUser(data));
      });
    }
  }, [id]);

  return (
    <>
      <div className="navbar fixed z-50 bg-gradient-to-r from-[#88a7c9] to-[#F0B0C1]">
        <Navbar />
      </div>
    </>
  );
};

export default NavbarLayout;
