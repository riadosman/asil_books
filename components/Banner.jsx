import Image from "next/image";
import Link from "next/link";

const Banner = ({ type, img }) => {
  const lowerCaseType = type.toLowerCase();
  return (
    <Link href={`/books?search=${encodeURIComponent(lowerCaseType)}`}>
      <Image
        src={img}
        alt="category-1"
        width={200}
        height={150}
        className="flex-1 w-full"
      />
    </Link>
  );
};

export default Banner;
