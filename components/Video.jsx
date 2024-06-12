import { useEffect, useRef } from "react";
import { gsap, Power4, Elastic } from "gsap";

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

    return (
      <div className=" bg-[#080808] flex justify-center items-center flex-col pb-28   bg-video pt-5">
        <h1 className="text-center text-5xl py-10">Landing</h1>

        <div className="relative">
          <div className="circle4">
            <button ref={(el) => (magnetoRefs.current[0] = el)} class="magneto">
              <span
                ref={(el) => (magnetoTextRefs.current[0] = el)}
                class="text"
              >
                Moon
              </span>
            </button>
          </div>
          <div className="circle4">
            <button ref={(el) => (magnetoRefs.current[1] = el)} class="magneto">
              <span
                ref={(el) => (magnetoTextRefs.current[1] = el)}
                class="text"
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