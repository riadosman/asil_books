import Link from "next/link";
import Image from "next/image";

import { booksData } from "@/lib/data.js";

function BestSelling() {
  return (
    <div>
      <div className="container text-center text-3xl">
        <h2 className="text-4xl mt-10 mb-5">الكتب الاكثر مبيعا</h2>
        <p>
          نضع بين يديك مجموعة كبيرة من الكتب الإسلامية و الروايات و كتب التنمية
          البشرية
        </p>
        <div className="grid grid-cols-4 gap-5 text-center my-10 text-lg">
          {booksData.slice(0, 4).map((book, index) => (
            <Link
              href={`/books/detail?name=${encodeURIComponent(book.name)}`}
              key={index}
              className="w-full border-2 border-secondary p-4 rounded cursor-pointer"
            >
              <Image src={book.img} alt={book.name} width={300} height={200} />
              <h2>{book.name}</h2>
              <p>{book.writer}</p>
              <p className="font-bold">${book.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
