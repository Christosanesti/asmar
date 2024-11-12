"use client";
import { Logs } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.1, -0.05, 0.9] }}
      className="fixed top-0 left-0 w-full grid grid-cols-2 p-5 px-6 z-[3]"
      dir="rtl"
    >
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
    </motion.nav>
  );
}

export default Navbar;
