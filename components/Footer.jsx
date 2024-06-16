import { motion } from "framer-motion";

const Footer = () => {
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-40%" : direction === "right" ? "40%" : 0,
      y: direction === "up" ? "-10%" : direction === "down" ? "10%" : 0,
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
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideIn("up", "spring", 0.2, 2)}
      className="z-0 relative"
    >
      <hr className="border-t-2 border-t-[#6E06D4] mx-auto sm:w-[60%] w-[100%] sm:left-[20%] left-0 absolute" />

      <footer className="p-2 pt-12 bg-[#080808]  text-2xl  flex-row flex justify-center items-center ">
        <div>
          <div className="flex gap-10 justify-center items-center mb-3">
            <motion.section
              initial="hidden"
              whileInView="show"
              variants={slideIn("left", "spring", 0.2, 2)}
              className="flex justify-center items-center"
            >
              <a
                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r  text-white font-semibold hover:scale-[1.1] hover:rounded-[50%] transition-all duration-500 from-gray-800  to-[#6E06D4]"
                href="https://github.com/YaroSK26?tab=repositories"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="absolute  text-white text-sm -translate-y-10 duration-700">
                  GitHub
                </span>
              </a>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="show"
              variants={slideIn("right", "spring", 0.2, 2)}
              className="flex justify-center items-center"
            >
              <a
                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r  text-white font-semibold hover:scale-[1.1] hover:rounded-[50%] transition-all duration-500 from-gray-800 to-[#6E06D4]"
                href="https://www.instagram.com/jaroslav_barabas/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="absolute text- text-sm -translate-y-10 duration-700">
                  Instagram
                </span>
              </a>
            </motion.section>
          </div>
          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={slideIn("up", "spring", 0.2, 2)}
              className="text-center sm:text-2xl text-xl"
            >
              &copy; Created by&nbsp;
              <a
                className="border-b-white border-b-2 shine cursor-pointer"
                href="https://www.jaroslav.website/"
                target="_blank"
              >
                Jaroslav Barabáš
              </a>
            </motion.p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
