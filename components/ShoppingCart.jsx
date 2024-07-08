import Link from "next/link";
import Image from "next/image";
import { cartProducts } from "@/lib/data";
import { deleteItemFromCart } from "@/utils/cart";
function ShoppingCart() {
  return (
    <div className="border-2 border-slate-200 p-2 cart bg-white w-fit lg:w-1/3 h-fit absolute top-20 right-20 z-50 rounded">
      <div className="border-b-2 border-text py-3 w-full text-center">
        <p className="text-xl">السلة</p>
      </div>
      {cartProducts.length === 0 ? (
        <div className="text-2xl w-full h-full flex items-center justify-center flex-col gap-5">
          <p>لا يوجد منتجات</p>
          <Link
            href="/books"
            className="bg-main py-1 px-2 rounded text-white text-xl"
          >
            ابدء بلتسوق
          </Link>
        </div>
      ) : (
        <div className="text-center">
          {cartProducts.map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-5 flex-row-reverse text-right border-2 border-slate-200 mb-2 p-2"
            >
              <Image src={e.img} alt={e.name} width={50} height={50} />
              <div className="w-full text-right">
                <p>{e.name}</p>
                <p>{e.price}$</p>
              </div>
              <div className="flex items-center justify-between gap-2">
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
                onClick={() => {
                  deleteItemFromCart(e);
                }}
              />
            </div>
          ))}
          <Link
            href="/cart"
            className="bg-main py-2 rounded text-white text-xl mx-auto my-4 w-full flex justify-center"
          >
            أكمل الطلب
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
