import Image from "next/image";
import Banner from "./Banner";
const BannersInfo = [
  {
    type: "Think and critique",
    img: "/images/banner-1-360x175.png",
  },
  {
    type: "Novels and poetry",
    img: "/images/banner-2-360x175.png",
  },
  {
    type: "Economy",
    img: "/images/banner-3-360x175.png",
  },
  {
    type: "Religions",
    img: "/images/banner-4-360x175.png",
  },
  {
    type: "history",
    img: "/images/banner-5-360x175.png",
  },
  {
    type: "Biographies and memoirs",
    img: "/images/banner-6-360x175.png",
  },
  {
    type: "Policy",
    img: "/images/banner-7-360x175.png",
  },
  {
    type: "philosophy",
    img: "/images/banner-8-360x175.png",
  },
  {
    type: "Sciences",
    img: "/images/banner-9-360x175.png",
  },
];
const Categorys = () => {
  return (
    <div>
      <div className="container">
        <Image
          src="/images/versions-2024.png"
          width={1000}
          height={100}
          alt="versions"
          className="w-full"
        />
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
            {BannersInfo.map((e, i) => (
              <Banner {...e} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categorys;
