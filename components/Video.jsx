import { useEffect, useRef } from "react";
import { gsap, Power4, Elastic } from "gsap";
import { IoPeople } from "react-icons/io5";

const Video = () => {
    const magnetoRefs = useRef([]);
    const magnetoTextRefs = useRef([]);

    useEffect(() => {
        magnetoRefs.current.forEach((magneto, index) => {
            const magnetoText = magnetoTextRefs.current[index];

            const activateMagneto = (event) => {
                let boundBox = magneto.getBoundingClientRect();
                const magnetoStrength = 40;
                const magnetoTextStrength = 50;

                const newX =
                    (event.clientX - boundBox.left) / magneto.offsetWidth - 0.4;
                const newY =
                    (event.clientY - boundBox.top) / magneto.offsetHeight - 0.4;

                gsap.to(magneto, {
                    x: newX * magnetoStrength,
                    y: newY * magnetoStrength,
                    duration: 1,
                    ease: Power4.easeOut,
                });

                gsap.to(magnetoText, {
                    x: newX * magnetoTextStrength,
                    y: newY * magnetoTextStrength,
                    duration: 1,
                    ease: Power4.easeOut,
                });
            };

            const resetMagneto = () => {
                gsap.to(magneto, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: Elastic.easeOut,
                });
                gsap.to(magnetoText, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: Elastic.easeOut,
                });
            };

            magneto.addEventListener("mousemove", activateMagneto);
            magneto.addEventListener("mouseleave", resetMagneto);

            // Clean up event listeners on unmount
            return () => {
                magneto.removeEventListener("mousemove", activateMagneto);
                magneto.removeEventListener("mouseleave", resetMagneto);
            };
        });
    }, []);



    //counter 

    useEffect(() => {
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
              clearInterval(timer);
            }
          }, step);
      }
      counter("count1", 0, 55, 3000);
      counter("count2", 100, 600, 3500);
      counter("count3", 0,  8, 4000);
    }, []);



    return (
      <div className=" bg-[#080808] flex justify-center items-center flex-col pb-28   bg-video pt-5">
        <section className="text-white py-5">
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col md:flex-row justify-around items-center px-4 py-8 my-20 bg-transparent rounded-2xl border-x-[3px] border-[#6E06D4] shadow-lg-2">
              <div className="w-52 text-center flex justify-center items-center flex-col p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-days"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                <h2 id="count1" className="text-3xl font-bold text-[#6E06D4]">
                  55
                </h2>
                <p>years ago</p>
              </div>
              <div className="w-52 text-center flex justify-center items-center flex-col p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-person-standing"
                >
                  <circle cx="12" cy="5" r="1" />
                  <path d="m9 20 3-6 3 6" />
                  <path d="m6 8 6 2 6-2" />
                  <path d="M12 10v4" />
                </svg>

                <h2 id="count2" className="text-3xl font-bold text-[#6E06D4] ">
                  600,000,000
                </h2>
                <p>millions people watching the mission </p>
              </div>
              <div className=" w-52 text-center flex justify-center items-center flex-col p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-rocket"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <h2 id="count3" className="text-3xl font-bold text-[#6E06D4]">
                  8
                </h2>
                <p>days of the mission</p>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-center text-5xl py-10">Landing</h1>

        <div className="relative">
          <div className="circle4">
            <button
              ref={(el) => (magnetoRefs.current[0] = el)}
              className="magneto"
            >
              <span
                ref={(el) => (magnetoTextRefs.current[0] = el)}
                className="text"
              >
                Moon
              </span>
            </button>
          </div>
          <div className="circle4">
            <button
              ref={(el) => (magnetoRefs.current[1] = el)}
              className="magneto"
            >
              <span
                ref={(el) => (magnetoTextRefs.current[1] = el)}
                className="text"
              >
                Moon
              </span>
            </button>
          </div>
          <video
            className="rounded-3xl border-x-[3px] border-[#6E06D4] shadow-lg-2 "
            controls
            width="640"
            height="264"
            poster="/video-bg.webp"
          >
            <source src="/Apollo11_LandingontheMoon.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}

export default Video;