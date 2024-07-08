import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="border-t-2 shadow-md p-20 bg-slate-200 text-center">
      <div className="container flex lg:flex-row flex-col gap-10 items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logor.png"
            className="rounded"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <ul className="flex justify-between items-center gap-6">
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
        <ul className="flex justify-between items-center gap-6">
          <li>
            <Link href="https://www.instagram.com/asil_book/">
              <Image
                src="/images_s/instagram.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/asilbook1?mibextid=ZbWKwL">
              <Image
                src="/images_s/facebook.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/DAR_ALASEEL">
              <Image
                src="/images_s/telegram.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://api.whatsapp.com/send/?phone=905345701084&text&type=phone_number&app_absent=0">
              <Image
                src="/images_s/whatsapp.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@asil_book">
              <Image
                src="/images_s/tiktok.svg"
                alt="social_media"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-4">
        Copyright © 2024 Asil Books | Powered by{" "}
        <Link href="https://riadosman.ramitamedia.com/">Riad Osman</Link>
      </p>
    </div>
  );
};
export default Footer;
