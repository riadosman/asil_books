"use client";
import { useSearchParams } from "next/navigation";
import { blogsData } from "@/lib/data";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { Suspense } from "react"; // Import Suspense

function Detail() {
  // Wrap useSearchParams() in Suspense
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DetailContent />
    </Suspense>
  );
}
function DetailContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  return (
    <div className="container py-10 flex gap-10">
      <div className="w-3/5 bg-secondary rounded h-fit hidden lg:flex flex-col">
        <p className="text-3xl text-right p-4">مقالات ذات صلة</p>
        {blogsData.map((e, i) => {
          return (
            <BlogCard
              key={i}
              index={i + 1}
              introduction={e.content[0].desc}
              title={e.title}
              StyleClass={
                "flex flex-col-reverse gap-5 border-t-2 border-white p-4 text-center"
              }
            />
          );
        })}
      </div>
      {blogsData.map((e, i) => {
        if (e.title === title) {
          return (
            <div
              key={i}
              className="bg-white rounded p-8 flex flex-col gap-10 items-end"
            >
              <h1 className="text-4xl text-right">{e.title}</h1>
              <Image
                src={`/images/blogs/${i + 1}.jpg`}
                alt={i}
                width={450}
                height={350}
              />
              {e.content.map((e, i) => (
                <div key={i} className="text-right">
                  <h1 className="text-3xl my-4">{e.title}</h1>
                  <p className="text-xl font-extralight font-serif">{e.desc}</p>
                </div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Detail;
