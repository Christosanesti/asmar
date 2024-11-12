import { Logs } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full grid grid-cols-2 p-5 px-6">
      <div>
        <Link href={"/"} className="">
          آسمار
        </Link>
      </div>
      <div className="flex items-start justify-between">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col items-start">
            <Link className="hover:underline" href={"/"}>
              درباره
            </Link>
            <Link className="hover:underline" href={"/"}>
              پروژه ها
            </Link>
            <Link className="hover:underline" href={"/"}>
              دکترین تجاری
            </Link>
          </div>
          <div className="flex flex-col items-start ">
            <Link className="hover:underline" href={"/"}>
              بازدهی
            </Link>
            <Link className="hover:underline" href={"/"}>
              بازار دیجیتال
            </Link>
            <Link className="hover:underline" href={"/"}>
              شرکت ما
            </Link>
          </div>
        </div>

        <button>
          <Logs />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;