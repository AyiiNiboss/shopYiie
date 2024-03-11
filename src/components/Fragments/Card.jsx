import { Link } from "react-router-dom";

const Card = (porps) => {
  const { data } = porps;
  return (
    <>
      <div className="card w-100 bg-slate-100 rounded-md shadow-xl">
        <div className="card-title p-5">
          <p className="uppercase">Categories</p>
        </div>
        <hr className="bg-slate-500" />
        <div className="card-body">
          <div className="lg:flex lg:justify-center  md:flex md:justify-center justify-center gap-4">
            {data.map((value) => (
              <Link to={`/products/category/${value.name}`} key={value.id}>
                <div className="mb-2 bg-[#F0B0C1] hover:bg-[#88a7c9] hover:text-slate-200 hover:origin-center hover:rotate-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-lg md:flex md:flex-col lg:flex lg:flex-col justify-center p-5">
                  <img
                    src={value.img}
                    className="w-full md:w-60 lg:w-60"
                    alt=""
                  />
                  <p className="text-base card-title justify-center uppercase md:text-xs lg:text-sm xl:text-lg">{value.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
