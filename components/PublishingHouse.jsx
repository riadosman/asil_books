import Image from "next/image";
function PublishingHouse() {
  return (
    <div>
      <div className="container text-center">
        <p className="text-4xl mt-10 mb-5">دور النشر</p>
        <div className="flex flex-wrap items-center justify-between p-10 gap-5">
          <div className="text-center lg:w-1/6 w-1/3 flex flex-col gap-5 rotate-container">
            <Image
              src="/images/Publishing_House/1.png"
              alt="publishing house"
              width={150}
              height={150}
              className="rounded-full border-2 p-1 border-slate-200 mx-auto rotate-image"
            />
            <p>مركز الأدب العربي</p>
          </div>
          <div className="text-center lg:w-1/6 w-1/3 flex flex-col gap-5 rotate-container">
            <Image
              src="/images/Publishing_House/2.jpg"
              alt="publishing house"
              width={150}
              height={150}
              className="rounded-full border-2 p-1 border-slate-200 mx-auto rotate-image"
            />
            <p>دار الغوثاني</p>
          </div>
          <div className="text-center lg:w-1/6 w-1/3 flex flex-col gap-5 rotate-container">
            <Image
              src="/images/Publishing_House/3.jpg"
              alt="publishing house"
              width={150}
              height={150}
              className="rounded-full border-2 p-1 border-slate-200 mx-auto rotate-image"
            />
            <p>دار الفكر</p>
          </div>
          <div className="text-center lg:w-1/6 w-1/3 flex flex-col gap-5 rotate-container">
            <Image
              src="/images/Publishing_House/4.jpg"
              alt="publishing house"
              width={150}
              height={150}
              className="rounded-full border-2 p-1 border-slate-200 mx-auto rotate-image"
            />
            <p>مــلهمون</p>
          </div>
          <div className="text-center lg:w-1/6 w-1/3 flex flex-col gap-5 rotate-container">
            <Image
              src="/images/Publishing_House/5.jpg"
              alt="publishing house"
              width={150}
              height={150}
              className="rounded-full border-2 p-1 border-slate-200 mx-auto rotate-image"
            />
            <p>زحمة كتب</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishingHouse;
