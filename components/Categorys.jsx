import Image from "next/image";
import Banner from "./Banner";
import { BannersInfo } from "@/lib/data";

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
