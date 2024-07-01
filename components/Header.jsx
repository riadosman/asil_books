import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="p-4">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            className="rounded h-16 w-16"
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
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-between">
            <Image
              src="/images_s/search.svg"
              alt="search"
              width={15}
              height={15}
              className="hidden lg:block mx-4 cursor-pointer"
            />
            <Link
              href="/cart"
              className="flex items-center justify-between gap-5 text-main"
            >
              <p>$ 0.00</p>
              <Image
                src="/images_s/cart.svg"
                alt="search"
                width={20}
                height={20}
              />
              <span className="hidden">2</span>
            </Link>
          </div>
          <div className="lg:hidden flex flex-col gap-1">
            <span className="h-0.5 bg-text rounded w-6 block"></span>
            <span className="h-0.5 bg-text rounded w-6 block"></span>
            <span className="h-0.5 bg-text rounded w-6 block"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
