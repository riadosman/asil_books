import Image from "next/image";
import { getIntroduction } from "@/utils/getIntroduction";
import { blogsData } from "@/lib/data";
import BlogCard from "@/components/BlogCard";

function Blogs() {
  return (
    <div>
      <Image
        src="/images/blogs/desktop_banner.png"
        alt="banner"
        width={1350}
        height={850}
      />
      <div className="container flex p-10 gap-10">
        <div className="w-3/5 bg-secondary rounded h-fit hidden lg:flex flex-col">
          <p className="text-3xl text-right p-4">مقالات ذات صلة</p>
          {blogsData.map((e, i) => {
            const introduction = getIntroduction(blogsData[i]);
            return (
              <BlogCard
                key={i}
                index={i + 1}
                introduction={introduction}
                title={e.title}
                StyleClass={
                  "flex flex-col-reverse gap-5 border-t-2 border-white p-4 text-center"
                }
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {blogsData.map((e, i) => {
            const introduction = getIntroduction(blogsData[i]);
            return (
              <BlogCard
                key={i}
                index={i + 1}
                introduction={introduction}
                title={e.title}
                StyleClass={
                  "border-2 rounded border-slate-200 flex items-center justify-between gap-5 text-right p-6 flex-col-reverse lg:flex-row"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
