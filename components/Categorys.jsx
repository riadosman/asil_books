"use client";
import Image from "next/image";
import Banner from "./Banner";
import { BannersInfo } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const Categorys = () => {
  return (
    <div className="container mx-auto">
      <Image
        src="/images/versions-2024.png"
        width={1000}
        height={100}
        alt="versions"
        className="w-full"
      />
      <div className="my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {BannersInfo.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Banner {...e} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
