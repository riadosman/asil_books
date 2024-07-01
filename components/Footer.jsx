import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="border-t-2 shadow-md p-20 bg-slate-200">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logor.png"
            className="rounded"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
        <ul className="hidden lg:flex lg:justify-between items-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Books</Link>
          </li>
          <li>
            <Link href="/">About Author</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex lg:justify-between items-center gap-6">
          <li>
            <Link href="/">
              <Image
                src="/images_s/instagram.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images_s/facebook.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images_s/twitter.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images_s/youtube.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto">
        Copyright © 2024 Book Store | Powered by Book Store
      </p>
    </div>
  );
};
export default Footer;
