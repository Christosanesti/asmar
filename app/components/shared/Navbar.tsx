"use client";
import { Computer, Logs, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { slidingMenu, slidingText } from "@/app/animation/transition";
import { AiFillWechat } from "react-icons/ai";
import ChatBot from "./ChatBot";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false); //
  const toggleAiChat = () => setIsAiChatOpen(!isAiChatOpen);
  return (
    <>
      <motion.nav
        dir="rtl"
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.1, -0.05, 0.9] }}
        className="fixed top-0 left-0 w-full grid grid-cols-2 p-5 px-6 z-[3]"
      >
        <div>
          <Link href={"/"} className="">
            آسمار
          </Link>
        </div>
        <div className="flex items-start justify-between">
          <div className="grid grid-cols-2 w-full ">
            <div className="md:flex md:flex-col items-start hidden">
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
            <div className="md:flex flex-col items-start hidden ">
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
          <button onClick={toggleAiChat} className="px-4">
            <AiFillWechat size={30} />
          </button>
          <button onClick={toggleMenu}>
            <Logs size={30} />
          </button>
        </div>
      </motion.nav>

      <motion.div
        variants={slidingMenu}
        initial="closed"
        animate={isAiChatOpen ? "open" : "closed"}
        className={`fixed z-[10] text-3xl font-sans bg-gray-200 text-black rounded-md  m-5 top-0 left-0 p-2 sm:p-3 `}
      >
        <motion.div
          variants={slidingText}
          initial="open"
          animate={isAiChatOpen ? "open" : "close"}
          className=" flex-col justify-between h-full"
        >
          <button onClick={toggleAiChat} className="flex ">
            <X size={30} />
          </button>
          <div className="flex justify-between">
            <ChatBot />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slidingMenu}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className={`fixed z-[10] text-3xl font-sans bg-gray-200 text-black rounded-md  m-5 top-0 left-0 p-2 sm:p-3 `}
      >
        <motion.div
          variants={slidingText}
          initial="open"
          animate={isMenuOpen ? "open" : "close"}
          className=" flex-col justify-between h-full"
        >
          <div className="flex justify-between">
            <button onClick={toggleMenu} className="flex ">
              <X size={30} />
            </button>
            <div className="flex flex-col items-end sm:my-5">
              <Link
                className="hover:underline tracking-tight font-sans text-lg md:text-2xl lg:text-4xl"
                href={"/"}
              >
                پروژه ها
              </Link>
              <Link
                className="hover:underline tracking-tight font-sans text-lg md:text-2xl lg:text-4xl "
                href={"/"}
              >
                دکترین تجاری
              </Link>
              <Link
                className="hover:underline tracking-tight font-sans text-lg md:text-2xl lg:text-4xl"
                href={"/"}
              >
                بازدهی
              </Link>
              <Link
                className="hover:underline tracking-tight font-sans text-lg md:text-2xl lg:text-4xl"
                href={"/"}
              >
                بازار دیجیتال
              </Link>
            </div>
          </div>
          <div dir="rtl" className="text-sm md:text-xl ">
            <div className="grid grid-cols-2">
              <p className="opacity-40">توانایی</p>
              <div className="flex flex-col">
                <span>دریاره</span>
                <span>سزویس ها</span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <p className="opacity-40">فعالیت ها</p>
              <div className="flex flex-col">
                <span>لورم</span>
                <span>ایپسوم</span>
                <span>ذولور</span>
                <span>ستامس</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;
