"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [query, setQuery] = useState("");
  const [cartVisiable, setCartVisiable] = useState(false);
  const [inputVisiable, setInputVisiable] = useState(false);
  const handleCartClose = () => {
    localStorage.setItem("cartIsOpen", false);
    setCartVisiable(false);
    console.log(cartVisiable);
  };
  const handleCart = () => {
    localStorage.setItem("cartIsOpen", true);
    setCartVisiable(!cartVisiable);
    console.log(cartVisiable);
  };
  const handleSearch = () => {
    setInputVisiable(!inputVisiable);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchBooks();
    }
  };
  const searchBooks = () => {
    console.log("Search query:", query);
    setInputVisiable(false);
  };
  return (
    <header className="p-4">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            className="rounded h-16 w-16"
            alt="logo"
            width={250}
            height={250}
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
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="ابحث عن كتابك"
              className={`${
                inputVisiable ? "" : "hidden"
              } text-right py-1 px-2 outline-none border-2 border-slate-200 text-xl rounded-xl mx-2`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Image
              src="/images_s/search.svg"
              alt="search"
              width={15}
              height={15}
              className="hidden lg:block mx-4 cursor-pointer"
              onClick={() => handleSearch()}
            />
            <div
              href="/cart"
              className="flex items-center justify-between gap-5 text-main"
            >
              <p>$ 0.00</p>
              <Image
                src="/images_s/cart.svg"
                alt="search"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => handleCart()}
              />
              <span className="hidden">2</span>
            </div>
          </div>
          {cartVisiable && (
            <>
              <ShoppingCart />
            </>
          )}
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
