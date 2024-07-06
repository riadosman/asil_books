import Image from "next/image";
import Link from "next/link";
function BlogCard({ introduction, title, index, StyleClass }) {
  return (
    <div className={StyleClass}>
      <div>
        <p className="text-main">{title}</p>
        <p className="my-8">{introduction}</p>
        <Link
          href={`/blogs/detail?title=${encodeURIComponent(title)}`}
          className="bg-main text-white cursor-pointer py-1 px-2 rounded"
        >
          اقرأ المزيد
        </Link>
      </div>
      <Image
        src={`/images/blogs/${index}.jpg`}
        alt={index}
        width={350}
        height={250}
      />
    </div>
  );
}

export default BlogCard;
