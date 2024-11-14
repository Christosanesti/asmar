"use client";
import Image from "next/image";
import bg from "/public/neck.jpg";
import { ArrowLeftSquare } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import {
  boxAnimation,
  iconAnimation,
  textAnimation,
} from "@/app/animation/transition";
import Link from "next/link";
import ChatBot from "@/app/components/shared/ChatBot";

export const Hero: React.FC<any> = () => {
  return (
    <section>
      <div className="min-h-screen overflow-hidden relative">
        <motion.div
          initial={{ scale: 1.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.6, 0.1, -0.5, 0.9] }}
          className="grid place-content-center"
        >
          <Image
            src={bg}
            alt="Background image"
            className="object-cover absolute min-h-screen z-[1] grayscale"
          />
        </motion.div>
        <div className="bg-black/80 w-full h-full absolute z-[2]"></div>
        <div
          className="z-[4] text-white absolute bottom-0 right-0 p-14"
          dir="rtl"
        >
          <div className="flex gap-2">
            <motion.h1
              variants={boxAnimation}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:text-7xl md:text-6xl text-4xl font-sans tracking-tight"
            >
              <motion.span variants={textAnimation}>موسسه</motion.span>
              <motion.span variants={textAnimation}>تجارت </motion.span>
              <motion.span variants={textAnimation}>بین المللی</motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="overflow-y-hidden mt-14"
            >
              <Link href="/about">
                <ArrowLeftSquare size={30} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.225 }}
            className="flex gap-5 py-6"
          >
            <Link href={"/about"}>
              <span className="items-center gap-2 flex">
                خدمات ما <ArrowLeftSquare size={20} />
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="items-center gap-2 flex">
                پرسنل <ArrowLeftSquare size={20} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
