import "../css/apollo11.css";
import { motion } from "framer-motion";

const Apollo11 = () => {
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  });

  return (
    <div
      id="astronauts"
      className="relative bg-[#080808] flex justify-center items-center flex-col sm:gap-20 gap-10 pt-24"
    >
      <motion.h1
        initial="hidden"
        whileInView="show"
        variants={slideIn("up", "spring", 0.2, 2)}
        className="md:text-5xl sm:text-4xl text-2xl  text-center relative mb-2"
      >
        <p className="flex  justify-center items-center sm:flex-row flex-col gap-5">
          Mission Apollo 11
          <img
            className="w-20 animate-pulse"
            src="/apollo11Logo.png"
            alt="Logo of Apollo 11 mission"
          />
        </p>
        <div className="absolute  sm:rotate-45 sm:left-0 sm:top-10 rotate-[70deg]  ">
          <img src="/arrow.gif" alt="arrow" />
          <p className="text-sm">Astronauts</p>
        </div>
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("left", "spring", 0.2, 2)}
        className="flex lg:flex-row flex-col lg:gap-60 gap-32 pb-5 pt-32 sm:pt-0"
      >
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="card card1">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img
                className="w-[105px]"
                src="/armstrong-signature.png"
                alt=" armstrong-signature"
              />
            </div>
          </div>
          <h1 className="text-3xl shine text-center">
            Neil Armstrong <br />
            <span className=" text-[18px]">Commander</span>
          </h1>
        </div>

        <div className="flex flex-col gap-20 justify-center items-center lg:mb-16 ">
          <div className="card card2">
            <div className="circle2"></div>
            <div className="circle2"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img src="/collins-signature.png" alt="collins-signature" />
            </div>
          </div>
          <h1 className="text-3xl shine text-center ">
            Michael Collins <br />
            <span className=" text-[18px]">Command module pilot</span>
          </h1>
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="card card3">
            <div className="circle3"></div>
            <div className="circle3"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img src="/aldrin-signature.png" alt="aldrin-signature" />
            </div>
          </div>
          <h1 className="text-3xl shine text-center">
            Buzz Aldrin
            <br /> <span className=" text-[18px]">Lunar module pilot</span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Apollo11;
