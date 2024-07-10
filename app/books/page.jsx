"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { booksData } from "@/lib/data.js";

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
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const writer = searchParams.get("writer");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setBooks(
      booksData.filter((e) =>
        e.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    Swal.fire({
      title: "تحذير",
      text: "هذه المعلومات هي معلومات عشوائية و سوف يتم تعديلها حسب الطلب",
      icon: "info",
      confirmButtonText: "العودة",
    });
    if (writer) {
      const filteredBooks = booksData.filter(
        (book) => book.writer.toLowerCase() === writer.toLowerCase()
      );
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

  const filteredBooks = useMemo(() => {
    if (query) {
      return books.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return books;
  }, [books, query]);

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
        <div className="flex items-center justify-between flex-row-reverse flex-wrap">
          <p className="text-right my-8 text-xl lg:text-3xl">{message}</p>
          <div className="relative w-48">
            <input
              type="text"
              placeholder="ابحث عن كتابك"
              className="text-right py-3 px-2 outline-none border-2 border-slate-200 text-xl rounded-xl mx-2"
              aria-label="Search for a book"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className="flex items-center justify-center bg-slate-200 p-2 absolute top-3 left-4 rounded-full cursor-pointer"
              onClick={handleSearch}
              aria-label="Search button"
            >
              <Image
                src="/images_s/search.svg"
                alt="search"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full border-2 border-secondary p-4 rounded cursor-pointer"
                >
                  <Link
                    href={`/books/detail?name=${encodeURIComponent(book.name)}`}
                  >
                    <Image
                      src={book.img}
                      alt={book.name}
                      width={300}
                      height={200}
                    />
                    <h2>{book.name}</h2>
                    <p>السعر: ${book.price}</p>
                    <p>الكاتب: {book.writer}</p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-2xl col-span-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                الكتاب غير موجود
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default Books;

{
  /*"use client";
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
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const writer = searchParams.get("writer");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setBooks((prev) => prev.filter((e) => e.name === event.target.value));
    }
  };

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
        <div className="flex items-center justify-between flex-row-reverse">
          <p className="text-right my-8 text-3xl">{message}</p>
          <div className="relative w-48">
            <input
              type="text"
              placeholder="ابحث عن كتابك"
              className={text-right py-3 px-2 outline-none border-2 border-slate-200 text-xl rounded-xl mx-2}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center justify-center bg-slate-200 p-2 absolute top-3 left-4 rounded-full">
              <Image
                src="/images_s/search.svg"
                alt="search"
                width={15}
                height={15}
                className=""
                onClick={() => handleSearch()}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center my-5">
          {books.map((book, index) => (
            <Link
              href={/books/detail?name=${encodeURIComponent(book.name)}}
              key={index}
              className="w-full border-2 border-secondary p-4 rounded cursor-pointer relative"
            >
              <Image src={book.img} alt={book.name} width={300} height={200} />

              <h2>{book.name}</h2>
              <p>السعر: ${book.price}</p>
              <p>الكاتب: {book.writer}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books; */
}
