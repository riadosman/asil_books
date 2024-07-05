"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { booksData } from "@/lib/data.js";
import SearchResult from "@/components/SearchResult";

function Books() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  if (search) {
    return <SearchResult category={search} />;
  }

  return (
    <>
      <Image
        src="/images/books-banner.png"
        alt="books-banner"
        width={1350}
        height={450}
        className="w-full"
      />
      <div className="container text-center">
        <div className="text-3xl flex flex-col gap-10 p-8">
          {/* <h1 className="text-6xl">الكتب</h1>
        <p>
          ما أعظم الكتابة، وما أعظم القراءة! إن كتبت صح، فإنك تعيش في القلوب،
          وإن قرأت صح، فإنك تعيش مع الأنبياء والعلماء
        </p> */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center my-5">
          {booksData.map((book, index) => (
            <Link
              href={`/books/detail?name=${encodeURIComponent(book.name)}`}
              key={index}
              className="w-full border-2 border-secondary p-4 rounded cursor-pointer"
            >
              <Image src={book.img} alt={book.name} width={300} height={200} />
              <h2>{book.name}</h2>
              <p>Price: ${book.price}</p>
              <p>Writer: {book.writer}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
