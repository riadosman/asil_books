"use client";
import Image from "next/image";
import { cartProducts } from "@/lib/data";
import { useState, useEffect } from "react";
import { checkOut } from "@/utils/cart";
function Cart() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTheTotal();
  }, []);

  const getTheTotal = () => {
    let sum = 0;
    cartProducts.forEach((e) => {
      sum += e.price;
    });
    setTotal(sum);
  };

  return (
    <div>
      <Image
        src="/images/cart-banner.png"
        alt="books-banner"
        width={1350}
        height={350}
        className="w-full"
      />
      <div className="container py-10">
        {cartProducts.map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-between flex-col gap-5 text-center lg:flex-row-reverse lg:text-right border-2 border-slate-200 mb-2 p-2"
          >
            <Image src={e.img} alt={e.name} width={100} height={100} />
            <div className="w-full text-right text-3xl">
              <p>{e.name}</p>
              <p className="text-xl">{e.description}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>{e.price}$</p>
              <input
                type="number"
                defaultValue={1}
                max={10}
                className="w-9 text-black p-0 rounded pl-1"
              />
              <p>العدد</p>
            </div>
            <Image
              src="/images/trash.svg"
              alt="trash"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        ))}
        <p className="text-right">
          تأكد من مراجعة طلبك قبل إتمام عملية الشراء. شكرًا لاختيارك متجرنا،
          ونتمنى لك قراءة ممتعة
        </p>
        <div className="my-5 flex items-center justify-around mx-auto">
          <button
            className="bg-main py-2 rounded text-white text-xl my-4 px-4 flex justify-center"
            onClick={checkOut(cartProducts)}
          >
            الانتقال الى عملية الدفع
          </button>
          <p>المجموع: {total + " ليره تركية "}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
