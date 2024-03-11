import FormLogin from "../Fragments/FormLogin";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center bg-[url('../../../public/images/background-auth-1.jpg')] bg-fixed bg-no-repeat bg-center">
      <div className="block rounded-lg shadow-lg w-[95%] lg:w-1/2">
        <div className="sm:flex lg:flex-wrap">
          <div className="w-full lg:w-6/12 bg-[url('../../../public/images/background-auth-2.jpg')] bg-fixed bg-no-repeat bg-center md:bg-[#88a7c9] lg:bg-[#88a7c9]">
            <div className="flex h-full flex-col justify-center p-10 md:p-20 lg:p-20">
              <img
                src="../../../public/images/shoyii.png"
                alt=""
                className="rounded-full w-full mx-auto mb-4"
              />
              <FormLogin />
              {/* <p className="mt-4">Register</p> */}
            </div>
          </div>
          <div className="hidden sm:flex lg:inline w-full lg:w-6/12 bg-[url('../../../public/images/walpaper.png')] bg-cover bg-center">
            <div className="text-center p-10">
              {/* <h1 className="text-3xl w-full font-bold">YiieShop</h1>
              <p>Welcome to the website</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
