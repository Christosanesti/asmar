import Image from "next/image";
import bg from "/public/nack.jpg";
import { ArrowLeftSquare, Plus } from "lucide-react";
function Home() {
  return (
    <div className="min-h-screen  overflow-hidden relative -z-1">
      <Image
        src={bg}
        alt="Background image"
        className="object-cover absolute min-h-screen z-[1] grayscale"
      />
      <div className="bg-black/80 w-full h-full absolute z-[2]"></div>
      <div
        className="z-[4] text-white absolute bottom-0 right-0 p-14"
        dir="rtl"
      >
        <div className="flex gap-2">
          <h1 className="flex flex-col text-8xl font-sans tracking-tight">
            <span dir="rtl">موسسه</span>
            <span>تجارت </span>
            <span>بین المللی </span>
          </h1>
          <ArrowLeftSquare size={30} className="mt-14" />
        </div>
        <div className="flex gap-5 py-6">
          <span className="items-center gap-2 flex">
            خدمات ما <ArrowLeftSquare size={20} />
          </span>
          <span className="items-center gap-2 flex">
            پرسنل <ArrowLeftSquare size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
