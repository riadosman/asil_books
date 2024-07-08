"use client";
import { useState, useEffect } from "react"; // Import useEffect for side effects
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { booksData } from "@/lib/data.js";
import SearchResult from "@/components/SearchResult";
import WriterResult from "@/components/WriterResult";
import Swal from "sweetalert2";
import { Suspense } from "react"; // Import Suspense
function Books() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <BooksContent />
    </Suspense>
  );
}

function BooksContent() {
  const [books, setBooks] = useState(booksData);
  const [message, setMessage] = useState("جميع الكتب");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const writer = searchParams.get("writer");

  useEffect(() => {
    Swal.fire({
      title: "تحذير",
      text: "هذه المعلومات هي معلومات عشوائية و سوف يتم تعديلها حسب الطلب",
      icon: "info",
      confirmButtonText: "العودة",
    });
    if (writer) {
      const filteredBooks = booksData.filter((book) => book.writer === writer);
      setBooks(filteredBooks);
      setMessage("جميع الكتب" + " / " + writer);
    } else if (search) {
      const filteredBooks = booksData.filter(
        (book) => book.category.toLowerCase() === search.toLowerCase()
      );
      setBooks(filteredBooks);
      setMessage("جميع الكتب" + " / " + search);
    } else {
      setBooks(booksData);
    }
  }, [writer, search]);

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
        <p className="text-right my-8 text-3xl">{message}</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center my-5">
          {/* {books.map((book, index) => (
            <Link
              href={`/books/detail?name=${encodeURIComponent(book.name)}`}
              key={index}
              className="w-full border-2 border-secondary p-4 rounded cursor-pointer"
            >
              <Image src={book.img} alt={book.name} width={300} height={200} />
              <h2>{book.name}</h2>
              <p>السعر: ${book.price}</p>
              <p>الكاتب: {book.writer}</p>
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Books;
