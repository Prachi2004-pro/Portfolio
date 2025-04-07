import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = {
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileTap={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          { Icon: RiReactjsLine, className: "text-cyan-400" },
          { Icon: TbBrandNextjs },
          {
            Icon: SiMongodb,
            className: "text-green-400 bg-green-950 rounded-full",
          },
          { Icon: RiTailwindCssFill, className: "text-blue-400" },
          { Icon: FaNodeJs, className: "text-green-500" },
        ].map(({ Icon, className }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants}
            className="p-4"
          >
            <div>
              <Icon className={`text-7xl ${className || ""}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
