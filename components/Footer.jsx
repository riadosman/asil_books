import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="border-t-2 shadow-md p-20 bg-slate-200 text-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logor.png"
            className="rounded"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <ul className="hidden lg:flex lg:justify-between items-center gap-6">
          <li>
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link href="/books">الكتب</Link>
          </li>
          <li>
            <Link href="/writers">الكُتتاب</Link>
          </li>
          <li>
            <Link href="/blogs">المقالات</Link>
          </li>
          <li>
            <Link href="/contact">تواصل معنا</Link>
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
      <p>
        Copyright © 2024 Asil Books | Powered by{" "}
        <Link href="https://riadosman.ramitamedia.com/">Riad Osman</Link>
      </p>
    </div>
  );
};
export default Footer;
