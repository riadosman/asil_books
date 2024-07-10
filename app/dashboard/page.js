"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Dashboard() {
  const [AuthCode, setAuthCode] = useState("");
  const [book, setBook] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    language: "",
    numberOfPages: "",
    bookFormat: "",
    writer: "",
    img: "",
    commentsForBook: [],
  });
  const [writer, setWriter] = useState({
    title: "",
    image: "",
    biography: "",
  });
  const [blog, setBlog] = useState({
    title: "",
    content: [],
  });

  const handleCreateBookChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  const handleCreateWriterChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  const handleCreateBlogChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleCreateBlogSubmit = async (e) => {
    e.preventDefault();

    if (AuthCode === "1Ie8p/b9>N2uBVhB") {
      try {
        const response = await fetch("http://localhost:3000/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        Swal.fire({
          title: "لقد تمت العملية",
          text: "تم حفظ البيانات",
          icon: "success",
          confirmButtonText: "العودة",
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        Swal.fire({
          title: "خطء في ارسال البيانات",
          text: "يرجى التأكد من المعلومات",
          icon: "error",
          confirmButtonText: "العودة",
        });
      }
    }
  };
  const handleCreateBookSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "description",
      "price",
      "category",
      "language",
      "numberOfPages",
      "bookFormat",
      "writer",
      "img",
    ];

    for (let field of requiredFields) {
      if (!book[field]) {
        alert(`${field} مطلوب`);
        return;
      }
    }
    if (AuthCode === "1Ie8p/b9>N2uBVhB") {
      try {
        const response = await fetch("http://localhost:3000/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        Swal.fire({
          title: "لقد تمت العملية",
          text: "تم حفظ البيانات",
          icon: "success",
          confirmButtonText: "العودة",
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        Swal.fire({
          title: "خطء في ارسال البيانات",
          text: "يرجى التأكد من المعلومات",
          icon: "error",
          confirmButtonText: "العودة",
        });
      }
    }
  };
  const handleCreateWriterSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["الاسم", "الصورة", "الفصة"];

    for (let field of requiredFields) {
      if (!writer[field]) {
        alert(`${field} مطلوب`);
        return;
      }
    }

    if (AuthCode === "1Ie8p/b9>N2uBVhB") {
      try {
        const response = await fetch("http://localhost:3000/api/writers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(writer),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        Swal.fire({
          title: "لقد تمت العملية",
          text: "تم حفظ البيانات",
          icon: "success",
          confirmButtonText: "العودة",
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        Swal.fire({
          title: "خطء في ارسال البيانات",
          text: "يرجى التأكد من المعلومات",
          icon: "error",
          confirmButtonText: "العودة",
        });
      }
    }
  };

  const [showCreateBook, setshowCreateBook] = useState(false);
  const [showCreateWriter, setshowCreateWriter] = useState(false);
  const [showCreateBlog, setshowCreateBlog] = useState(false);
  return (
    <div className="container p-10 text-right font-serif">
      <div className="flex items-center justify-between flex-row-reverse">
        <h1 className="text-3xl">اهلا بك مجدد</h1>
        <input
          type="text"
          className="rounded py-2 px-3"
          placeholder="الرمز الخاص"
          value={AuthCode}
          onChange={(e) => {
            setAuthCode(e.target.value);
          }}
        />
      </div>
      <hr className="w-full border-2 border-slate-200 my-5 " />
      <div className="flex justify-between items-center gap-2 text-2xl my-5 flex-col lg:flex-row">
        <button
          className={`${
            showCreateBook ? "bg-white text-main" : "bg-main text-white"
          } border-2 border-main flex flex-1 rounded-lg py-2 items-center justify-center px-10`}
          onClick={() => setshowCreateBook((prev) => !prev)}
        >
          اضافة كتاب جديد
        </button>
        <button
          className={`${
            showCreateWriter ? "bg-white text-main" : "bg-main text-white"
          } border-2 border-main flex flex-1 rounded-lg py-2 items-center justify-center px-10`}
          onClick={() => setshowCreateWriter((prev) => !prev)}
        >
          اضافة كاتب جديد
        </button>
        <button
          className={`${
            showCreateBlog ? "bg-white text-main" : "bg-main text-white"
          } border-2 border-main flex flex-1 rounded-lg py-2 items-center justify-center px-10`}
          onClick={() => setshowCreateBlog((prev) => !prev)}
        >
          اضافة مقال جديد
        </button>
      </div>
      {showCreateBook && (
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="font-semibold leading-7 text-gray-900">
              انشاء كتاب جديد
            </h2>
            <div className="mt-10 grid gap-x-6 gap-y-8">
              <form
                onSubmit={handleCreateBookSubmit}
                className="flex flex-col gap-5 text-2xl"
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    اسم الكتاب
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={book.name}
                      onChange={handleCreateBookChange}
                      placeholder="أدخل اسم الكتاب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    وصف
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      value={book.description}
                      onChange={handleCreateBookChange}
                      placeholder="أدخل وصف الكتاب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    السعر
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      value={book.price}
                      onChange={handleCreateBookChange}
                      placeholder="أدخل سعر الكتاب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التصنيف
                  </label>
                  <div className="mt-2">
                    <input
                      id="category"
                      name="category"
                      type="text"
                      value={book.category}
                      onChange={handleCreateBookChange}
                      placeholder="روايات"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    اللغة
                  </label>
                  <div className="mt-2">
                    <input
                      id="language"
                      name="language"
                      type="text"
                      value={book.language}
                      onChange={handleCreateBookChange}
                      placeholder="الإنجليزية"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="numberOfPages"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    عدد الصفحات
                  </label>
                  <div className="mt-2">
                    <input
                      id="numberOfPages"
                      name="numberOfPages"
                      type="number"
                      value={book.numberOfPages}
                      onChange={handleCreateBookChange}
                      placeholder="أدخل عدد صفحات الكتاب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="bookFormat"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    تنسيق الكتاب
                  </label>
                  <div className="mt-2">
                    <input
                      id="bookFormat"
                      name="bookFormat"
                      type="text"
                      value={book.bookFormat}
                      onChange={handleCreateBookChange}
                      placeholder="غلاف عادي"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="writer"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    الكاتب
                  </label>
                  <div className="mt-2">
                    <input
                      id="writer"
                      name="writer"
                      type="text"
                      value={book.writer}
                      onChange={handleCreateBookChange}
                      placeholder="أدهم الشرقاوي"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="img"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    رابط الصورة
                  </label>
                  <div className="mt-2">
                    <input
                      id="img"
                      name="img"
                      type="text"
                      value={book.img}
                      onChange={handleCreateBookChange}
                      placeholder="/images/book.jpg"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  حفظ الكتاب
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showCreateWriter && (
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="font-semibold leading-7 text-gray-900">
              انشاء كاتب جديد
            </h2>
            <div className="mt-10 grid gap-x-6 gap-y-8">
              <form
                onSubmit={handleCreateWriterSubmit}
                className="flex flex-col gap-5 text-2xl"
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    اسم كاتب
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={writer.name}
                      onChange={handleCreateWriterChange}
                      placeholder="أدخل اسم كاتب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="biography"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    قصته
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="biography"
                      name="biography"
                      value={writer.biography}
                      onChange={handleCreateWriterChange}
                      placeholder="أدخل قصه كاتب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    الصورة
                  </label>
                  <div className="mt-2">
                    <input
                      id="image"
                      name="image"
                      type="text"
                      value={writer.image}
                      onChange={handleCreateWriterChange}
                      placeholder="أدخل صورة الكاتب"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  حفظ الكاتب
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showCreateBlog && (
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              انشاء مقال جديد
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
              <form
                onSubmit={handleCreateBlogSubmit}
                className="flex flex-col gap-5 text-2xl"
              >
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الرئيسي
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      autoComplete="text"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي الاول
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي الثاني
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي الثالث
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي الرابع
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي الخامس
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    العنوان الفرعي السادس
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    التفاصيل
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      autoComplete="message"
                      className="text-right block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  حفظ المقال
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
