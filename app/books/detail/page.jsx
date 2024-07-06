"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { booksData } from "@/lib/data.js";
import { StarRating } from "@/components/StarRating";
import Link from "next/link";

function Detail() {
  const [book, setBook] = useState(null);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    if (name) {
      const foundBook = booksData.find(
        (book) => book.name.toLowerCase() === name.toLowerCase()
      );
      setBook(foundBook);
    }
  }, [name]);

  return (
    <div className="container bg-white w-full p-20">
      {book ? (
        <>
          <div className="flex lg:flex-row flex-col items-center justify-between gap-10 leading-loose">
            <Image src={book.img} alt={book.name} width={500} height={400} />
            <div className="flex flex-col gap-4 text-right text-xl">
              <p>{book.category}</p>
              <h1 className="text-2xl font-bold">{book.name}</h1>
              <p>{book.description}</p>
              <p>
                <strong>الكاتب:</strong>{" "}
                <Link href={`/books?writer=${book.writer}`}>{book.writer}</Link>
              </p>
              <p>
                <strong>لغة الكتاب:</strong> {book.language}
              </p>
              <p>
                <strong>جنس الكتاب:</strong> {book.bookFormat}
              </p>
              <p>
                <strong>عدد الصفحات:</strong> {book.numberOfPages}
              </p>
              <hr className="border-1 border-main my-6" />
              <div className="flex items-center justify-between flex-col gap-4 lg:flex-row">
                <p>
                  <strong>السعر:</strong> {book.price} $
                </p>
                <button className="border-[1px] w-[200px] border-main text-main cursor-pointer rounded py-2 px-2 flex items-center justify-center hover:bg-main duration-200 hover:text-white">
                  اضافة الى السلة
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white py-24 sm:py-32 text-center">
            <h1 className="mb-10 text-3xl font-bold">بعض الأراء</h1>
            <div className="mx-auto">
              <ul
                role="list"
                className="gap-x-8 gap-y-12 flex items-center justify-between"
              >
                {book.commentsForBook.map((person) => (
                  <li key={person.user} className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-x-6 border-2 p-6">
                      <div>
                        <h3 className="text-2xl font-bold leading-7 tracking-tight text-gray-900">
                          {person.user}
                        </h3>
                        <p className="my-2 text-md font-semibold leading-6 text-text">
                          {person.comment}
                        </p>
                        <StarRating rating={person.rating} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center mt-10">
                <input
                  type="text"
                  placeholder="اكتب رئيك....."
                  className="w-4/5 py-2 px-4 border-2 border-primary"
                />
                <button className="w-1/5 py-2 px-4 border-2 border-primary bg-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold">منتجات ذات صلة</p>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 text-center my-5">
              {booksData.map((e, index) => {
                if (e.category === book.category) {
                  return (
                    <Link
                      href={`/books/detail?name=${encodeURIComponent(e.name)}`}
                      key={index}
                      className="w-full lg:w-fit cursor-pointer"
                    >
                      <Image
                        src={e.img}
                        alt={e.name}
                        width={300}
                        height={200}
                      />
                      <h2 className="text-xl my-2">{e.name}</h2>
                      <p>السعر: ${e.price}</p>
                      <p>الكاتب: {e.writer}</p>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="not-found">
          <h1>Book not found</h1>
        </div>
      )}
    </div>
  );
}

export default Detail;
