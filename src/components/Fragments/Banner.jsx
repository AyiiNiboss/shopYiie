const bannerCarausel = [
  {
    id: 1,
    url: "https://cf.shopee.co.id/file/id-50009109-0855d7f3c0efef088724a63db189f64f_xxhdpi",
  },
  {
    id: 2,
    url: "https://cf.shopee.co.id/file/id-50009109-57c00241ed14de036b24503f9ee7b54a_xxhdpi",
  },
  {
    id: 3,
    url: "https://cf.shopee.co.id/file/id-50009109-b1230775b7e5e66e476c1c9244994a08_xxhdpi",
  },
  {
    id: 4,
    url: "https://cf.shopee.co.id/file/id-50009109-a1ba8ce29b87911bc09d584791d7734d_xxhdpi",
  },
  {
    id: 5,
    url: "https://cf.shopee.co.id/file/id-50009109-a6df1a8c6e5e14e81c7d920889a74854_xxhdpi",
  },
  {
    id: 6,
    url: "https://cf.shopee.co.id/file/id-50009109-4bf928cd5f7a523b19876bf4bfd1df3a_xxhdpi",
  },
];

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        {bannerCarausel.map((value) => (
          <div
            id={`slide${value.id}`}
            key={value.id}
            className="carousel-item relative w-full"
          >
            <img src={value.url} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${value.id - 1}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${value.id + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
