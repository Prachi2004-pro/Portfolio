import profilePic from "../assets/ProfilePic-1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      straggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden:{opacity: 0, x: -100},
  visible:{opacity:1, x:0, transition: {duration: 1}}
}
const Hero = () => {
  return (
    <div className="pb-4 lg: mb-36">
      <div className="flex flex-wrap lg: flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Prachi Bharadwa"
              className="border border-stone-900 rounded-3xl w-1/2 bg-black grayscale-50"
              width={650}
              height={650}
              initial={{x: 100, opacity: 0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay: 0.5}}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 xl:mx-12">
              <motion.h2 variants={childVariants} className="pb-2 tracking-tighter text-4xl lg:text-7xl">
              Prachi Bharadwa
              </motion.h2>
              <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend Developer
              </motion.span>
              <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter">
              {HERO_CONTENT}
              </motion.p>
              <motion.a
                variants={childVariants}
                href="/Prachi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-xl p-4 text-sm text-stone-800">
                Download Resume
              </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
