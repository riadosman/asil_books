import Image from "next/image";
import { Writers } from "@/lib/data";
function page() {
  return (
    <div className="container py-24 flex flex-col gap-20">
      {Writers.map((e, i) => (
        <div
          key={i}
          className="flex items-center flex-col lg:flex-row gap-20 justify-between p-6 border-2 border-slate-200 rounded"
        >
          <Image src={e.image} alt={e.title} width={300} height={300} />
          <div className="flex flex-col text-right justify-between gap-10">
            <h1 className="text-4xl">{e.title}</h1>
            <p className="leading-9">{e.biography}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
