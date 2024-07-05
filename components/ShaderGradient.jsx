"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "../css/letter.css";

const ShaderGradientPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, {
      duration: 1,
      y: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "bounce",
    });
  }, []);

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: "-20px",
      x: "60px",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);



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

  useEffect(() => {
    const wrapper = document.querySelector(".eagle");

    const Trigger =  ScrollTrigger.create({
      trigger: wrapper,
      pin: true,
      start: "top top",
      end: "+=1500px",
    })
    let tl = gsap.timeline()

    tl.to(wrapper, {
       x:"110vw",
       y:"80vh",
       scrollTrigger: {
         start: () => Trigger?.start,
         end: () => Trigger?.end,
         scrub:2,
       }
    })

    return () => {
      Trigger.kill()
      tl.kill()
    }
  }, []);




    const [isPlaying, setIsPlaying] = useState(false);
    const audioUrl =
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Phrase_de_Neil_Armstrong.oga";

    const togglePlayPause = () => {
      const audio = document.getElementById("audio");
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
    };


  return (
    <div className="relative overflow-hidden ">
      <img
        src="/mesh.png"
        alt="mesh gradient"
        className="w-[100vw] h-[100vh]"
      />

      <img
        ref={imageRef}
        className="astro absolute sm:w-40 w-24 sm:top-[400px] top-[300px] right-16 sm:right-52 z-[100] "
        src="/spaceman.webp"
        alt="spaceman"
      />

      <img
        className="eagle z-[100] w-[250px] absolute top-0 -left-48 overflow-y-hidden"
        src="/eagle.gif"
        alt="eagle"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("left", "spring", 0.2, 2)}
        className="absolute  top-52 sm:left-10 left-3"
      >
        <div id="text">
          <div className="line">
            <h1
              id="channel-link"
              className="word fancy sm:max-w-[1000px] lg:text-6xl md:text-4xl sm:text-3xl text-xl"
            >
              <span className="letter">&quot;</span>
              <span className="letter">O</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              &nbsp;
              <span className="letter">s</span>
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">l</span>
              <span className="letter">l</span>
              &nbsp;
              <span className="letter">s</span>
              <span className="letter">t</span>
              <span className="letter">e</span>
              <span className="letter">p</span>
              &nbsp;
              <span className="letter">f</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              &nbsp;
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">,</span>
              &nbsp;
              <span className="letter">o</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              &nbsp;
              <br />
              <span className="letter">g</span>
              <span className="letter">i</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
              &nbsp;
              <span className="letter">l</span>
              <span className="letter">e</span>
              <span className="letter">a</span>
              <span className="letter">p</span>
              &nbsp;
              <span className="letter">f</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              &nbsp;
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">k</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">d</span>
              <span className="letter">.</span>
              <span className="letter">&quot;</span>
            </h1>
          </div>
          <br />
          <div className="line">
            <h1 id="channel-link" className="word fancy sm:text-xl text-lg  ">
              <span className="letter">N</span>
              <span className="letter">e</span>
              <span className="letter">i</span>
              <span className="letter">l</span>
              &nbsp;
              <span className="letter">A</span>
              <span className="letter">r</span>
              <span className="letter">m</span>
              <span className="letter">s</span>
              <span className="letter">t</span>
              <span className="letter">r</span>
              <span className="letter">o</span>
              <span className="letter">n</span>
              <span className="letter">g</span>
            </h1>
            <div className="flex justify-center items-center">
              <audio id="audio" src={audioUrl} onEnded={handleAudioEnd} />
              <button onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>
        <a className="w-[160px] block" href="#astronauts">
          <div className="btn-container mt-6 " ref={elementRef}>
            <div className="svg svg-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height="40px"
                width="40px"
              >
                <path
                  fill="#1d1d1b"
                  d="m56.62 28.46a20.57 20.57 0 0 0 -4.85-2.94s-1.18-3.35-2.4-5.85a16 16 0 0 0 -11-7.46c-5.31-.69-9.75-.94-16.13 2.15a22.19 22.19 0 0 0 -9.34 9.16 21.15 21.15 0 0 0 -6.19 3.12 5.68 5.68 0 0 0 .56 9.36 43.94 43.94 0 0 0 5.73 2.91 23.74 23.74 0 0 0 4.5 7.39c2.94 2.94 5.28 5.25 11.63 5.75s8 0 11.31-1.81a34.34 34.34 0 0 0 7.19-5.47 30 30 0 0 0 3.11-3.16c4.31-1.2 6.93-2.83 8.11-5.53 1.27-2.94.71-5.37-2.23-7.62zm-44 8c-.1 0-4.94-2-5.75-4.75s3.37-5.53 5.4-6.41a14.57 14.57 0 0 0 -.43 6.22c.5 3.31.84 5 .75 4.97zm42.28 1.12c-1.91 1.66-3.47 2.06-3.41 1.91a18.36 18.36 0 0 0 1.41-6.07 38.3 38.3 0 0 0 -.44-5.4s3.44 1.22 4.47 3.84-.12 4.06-2.03 5.72z"
                ></path>

                <path
                  fill="#85bfe9"
                  d="m16.84 22.46c-.37-.09-.85-.32-.38-.85a18.1 18.1 0 0 1 9-6.75 22.15 22.15 0 0 1 14.28-.28c2.28.69 5.41 2.34 5.25 2.59a1.29 1.29 0 0 1 -1.06.57c-.63.06-2.84-.38-4.78.43s-2.5 1.47-3.88 1.5a23.54 23.54 0 0 0 -6.47.54c-2.9.75-3.46 1.65-5.68 1.93a45 45 0 0 1 -6.28.32z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m19.52 20.61a6.35 6.35 0 0 1 2.07-2.09 8.92 8.92 0 0 1 2.41-1.41c.16 0 .38.38.22.47a8.26 8.26 0 0 0 -2.37 1.75c-1 1.09-.78 1.56-1.22 1.63s-1.26-.19-1.11-.35z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m15 24.33a7.44 7.44 0 0 1 2.88-.41c1.75 0 2.9.66 6.22-.37s4.06-1.81 5.75-1.84 3.34.5 5.9-.25 3.69-1.57 5.07-1.85 3.84-.22 4.34-.31 1.69-.41 1.87-.22a27.24 27.24 0 0 1 2.6 5.53c.94 2.75 1.06 3.66.87 4a10.63 10.63 0 0 1 -5.5 1.53c-2.78.1-4.46-1.75-9-1.59s-8.93.91-11.06.66-3.5-1.35-6.06-1.22a13.63 13.63 0 0 0 -3.91.43c-.87.29-1 .72-1.12.22s.33-3.53 1.15-4.31z"
                ></path>

                <g fill="#1d1d1b">
                  <path d="m44.77 20.71a7.38 7.38 0 0 1 2.72 1.4c-.09.19.07.44-.34.44a10.38 10.38 0 0 1 -2.72-1.16 1.13 1.13 0 0 1 .34-.68z"></path>

                  <path d="m43.81 22.64s4.25 1.94 4.25 2.22.18.47-.16.44a28.09 28.09 0 0 1 -4.5-1.94c-.06-.22.41-.72.41-.72z"></path>

                  <path d="m41.77 24.08c.16 0 5.54 2.63 5.5 2.88s.13.5-.18.46a46.82 46.82 0 0 1 -5.72-2.42c.03-.23.28-.92.4-.92z"></path>

                  <path d="m40.24 25.92c.1 0 4.32 1.94 4.22 2.13s-.06.34-.28.34a34.62 34.62 0 0 1 -4.34-1.65 2.24 2.24 0 0 1 .4-.82z"></path>
                </g>

                <path
                  fill="#cbe7f5"
                  d="m14.21 30.33c.14-.14.94-1.16 3.69-.72s4.25 1.78 7.31 1.22 9.63-.91 12.35-.34 2.06 1.56 6.53 1.37 6.5-1.5 6.72-1.19a12.74 12.74 0 0 1 -.16 5.47c-.56 2.88-.91 3.78-1.06 3.94a30.43 30.43 0 0 1 -5.85.94c-.4-.19-4.25-3.13-4.47-3.13s-.71.22-.59.44 4.32 2.67 4.06 2.84a37.54 37.54 0 0 1 -12 .19 84.18 84.18 0 0 1 -13.65-3.06 4.92 4.92 0 0 1 -2.09-.84 19.69 19.69 0 0 1 -1.25-4.79c-.23-1.75.25-2.09.46-2.34z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m41.65 36.46a20.45 20.45 0 0 1 4.25 3.15c0 .25 0 .44-.22.41s-4.68-2.75-4.62-3.02.46-.48.59-.54z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m43.06 35.49c0-.09.46-.44.75-.38a21.34 21.34 0 0 1 3.75 2.81c0 .29.06.57-.25.5a28.43 28.43 0 0 1 -4.25-2.93z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m45.24 33.89c-.14-.1.16-.5.53-.43s2.57 1.28 2.5 1.56-.15.62-.34.62a31.51 31.51 0 0 1 -2.69-1.75z"
                ></path>

                <path
                  fill="#85bfe9"
                  d="m15.93 40.08c0-.28 7.59 2.56 12.59 2.94a82.14 82.14 0 0 0 13.48.22c4.66-.38 5.88-.66 5.88-.53a19.19 19.19 0 0 1 -8.1 6.37 27.15 27.15 0 0 1 -15.22.22c-3.75-1.25-6.62-5.56-7-6.13a19.42 19.42 0 0 1 -1.63-3.09z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m20.71 43.49c.29-.29 1.06.65 1.75.59s1.66-.25 2 .06.66.66 1.25.6 2.22-.72 2.5-.57.5.13.32.32a5.31 5.31 0 0 1 -2.72 1.09c-1.1 0-1.94-.87-2.38-.81a5.12 5.12 0 0 1 -1.81.12c-.75-.12-1.16-1.15-.91-1.4z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m28.52 47.33a20 20 0 0 0 3.66.84 4.25 4.25 0 0 0 1.82-.17c.25-.1 1.07-.32 1.19-.16s.28.22.13.41a2.69 2.69 0 0 1 -1.5.56c-.72.06-2.75 0-3.63 0s-1 .12-1.47-.16-.6-1.23-.2-1.32z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m37.27 45.92c.2-.11 1.32-.53 1.54-.34s.59.31.21.53a4.14 4.14 0 0 1 -1.46.53c-.25-.03-.5-.59-.29-.72z"
                ></path>
              </svg>
            </div>
            <div className="svg svg-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height="40px"
                width="40px"
              >
                <path
                  fill="#1d1d1b"
                  d="m16.75 28.37a14.3 14.3 0 0 1 3.34-6.31 14.54 14.54 0 0 1 5.88-4c.53-.15 2.84-.34 2.84-.34s0-1.75.78-2a8.24 8.24 0 0 1 1.72-.38v-2.84s-1.53-.28-1.78-1.56.69-2.44 2.47-2.38 2.56 1.25 2.21 2.53a2.32 2.32 0 0 1 -1.84 1.5l-.06 2.69s2.06 0 2.12 1.22.07 1.34.07 1.34 4.71 0 7.68 3.06a26.82 26.82 0 0 1 4.6 5.94 10.68 10.68 0 0 1 .09 1.53 26.08 26.08 0 0 1 9.41 3.47c4 2.69 5.22 4.41 5 8.56a11.29 11.29 0 0 1 -5.07 9.13c-2.84 1.87-6.09 5-15.93 5.75a54.76 54.76 0 0 1 -23.28-3.19c-6-2.09-10.22-4.4-12.72-7.81a9.17 9.17 0 0 1 -.44-9.44c1-1.47 3.88-3.37 7-4.59a52.93 52.93 0 0 1 5.91-1.88z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m19.68 35.06a8 8 0 0 1 -1.28-4.44 15.5 15.5 0 0 1 3.91-8.5 11.57 11.57 0 0 1 7.69-3.18c3.15-.19 6.62.43 8.72 1.81a10.73 10.73 0 0 1 2.56 2s-1.35 0-1.38.16-.09.71 0 .75a15.94 15.94 0 0 1 2.63.34c.19.19 2.25 2.06 2.59 3.94a15.76 15.76 0 0 1 0 5c-.12-.1-5.69-2.69-5.81-2.63s-.31.59-.22.69 5.94 2.53 6 2.81-.13 1.78-.13 1.78-5.78-2.87-6-2.72-.5.57-.34.69 6.31 2.75 6.28 2.94-.81.75-1.22.94l-.56.25a53.62 53.62 0 0 0 -4.88-2.75c-.21.09-.65.28-.43.59s4.37 2.41 4.15 2.62-3.87.82-9.09.72-10.15-.37-13.19-3.81z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m31.47 9.44c1.07-.13 1.93.4 1.75 1.31s-2.07.78-2.47.5a1.06 1.06 0 0 1 .72-1.81z"
                ></path>

                <path
                  fill="#696a9b"
                  d="m30.34 17.62a.37.37 0 0 1 -.41-.43c.07-.32.5-.91 1.69-.85s1.63.35 1.78.72 0 .44-.37.5-2.35 0-2.69.06z"
                ></path>

                <g fill="#1d1d1b">
                  <path d="m39.84 25.4a21.45 21.45 0 0 1 4 1.72c.09.22.16.72 0 .75a33.77 33.77 0 0 1 -3.88-1.43c-.21-.16-.24-1-.12-1.04z"></path>

                  <path d="m40 28a40.88 40.88 0 0 1 4.46 1.93c0 .22.1.5-.12.5a41.64 41.64 0 0 1 -4.38-1.46c-.15-.19-.21-.97.04-.97z"></path>

                  <path d="m25 22.59a3.8 3.8 0 0 1 1.87-1.69c1.38-.59 2.22-.62 2.41-.43a.64.64 0 0 1 .12.68 13.46 13.46 0 0 0 -2.4.85c-.66.5-1.06 1.09-1.38 1.19s-.69-.41-.62-.6z"></path>

                  <path d="m23.34 24.87c.31-.1 1.81.16 1.81.47a8.74 8.74 0 0 0 -.06 4c.56 1.78 1.72 4.44 1.53 5.28a1.47 1.47 0 0 1 -1.62 1.1 11.25 11.25 0 0 1 -3.6-1.35c-.81-.56-1.06-1.31-.93-3.12s1.93-6.06 2.87-6.38z"></path>
                </g>

                <path
                  fill="#e6e4da"
                  d="m23.68 25.87c.16 0 .19.13.16.41a20.35 20.35 0 0 0 .72 5.47c.69 2.19.84 2.5.59 2.62a9.49 9.49 0 0 1 -3.34-1 10.1 10.1 0 0 1 .12-3.87c.35-1.88 1.35-3.5 1.75-3.63z"
                ></path>

                <path
                  fill="#92a0d1"
                  d="m16.15 29.87c.27 0 .07 4.38 2 6.38s4.85 3.31 9.35 3.9a36 36 0 0 0 12.06-.15 20.52 20.52 0 0 0 7.25-2.91.72.72 0 0 0 .28-.56s.06-6.06.16-6.16 5.5.69 8.43 3 3.69 3.69 3.6 6.22a6.87 6.87 0 0 1 -2.35 4.66 9.78 9.78 0 0 1 -1.81 1.22s-4.25-3.35-4.44-3.32-.62.54-.46.72 4.46 3 4.25 3.19a13.24 13.24 0 0 1 -1.66.75s-2.34-1.81-2.47-1.81-.66.4-.5.65 2.16 1.44 2.06 1.54a49.56 49.56 0 0 1 -14.15 2.09 71.36 71.36 0 0 1 -20.13-2.38 44.59 44.59 0 0 1 -11.5-5.21 4.72 4.72 0 0 1 0-6.75 23.42 23.42 0 0 1 10.03-5.07z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m52.75 40.62c.38-.11 3.34 2.35 3.28 2.53s-.31.54-.56.44a24.39 24.39 0 0 1 -3.22-2.34c-.07-.25.28-.56.5-.63z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m54.5 40c.12 0 .65-.44.87-.41a10.77 10.77 0 0 1 2.56 1.94c-.09.19-.15.53-.5.44s-2.93-1.97-2.93-1.97z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m56.78 38.81c.12-.12.22-.53.62-.37s.85.93.72 1.09-.15.37-.28.28-1.06-1-1.06-1z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m51.34 35.34a2.57 2.57 0 0 1 3.66 2c.4 2.38-3.82 2.88-4.66 1.41a2.32 2.32 0 0 1 1-3.41z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m52 36.19a1.69 1.69 0 0 1 2 1.5c.12 1.15-2.28 1.4-2.75.5a1.41 1.41 0 0 1 .75-2z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m43.78 41.78c.9-.25 2.81-.28 3.31 1.19s-1.94 2.93-3.37 2.72a2.13 2.13 0 0 1 -1.82-2.16 2.8 2.8 0 0 1 1.88-1.75z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m44.43 42.56c.64-.06 1.75.5 1.41 1.13s-1.66 1.06-2.19.56a1 1 0 0 1 .78-1.69z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m31.25 42.75c.76-.11 3.93.06 4.09 1.62s-1.62 3.19-4.28 2.53a2.09 2.09 0 0 1 .19-4.15z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m31.28 43.78a3.49 3.49 0 0 1 2.25.66c.53.53.06 1.43-1.35 1.4s-2.56-1.65-.9-2.06z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m18.09 40.22c1.33-.22 4.63.47 4.53 2.59s-4.22 2.56-5.62 1.34a2.17 2.17 0 0 1 1.09-3.93z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m18 41.34c.87-.1 3.12.25 3.34 1.31s-1.66 1.54-3.09.85-.82-2.1-.25-2.16z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m10.93 34.34c1.1-.07 3.72.1 3.19 2.5s-4.22 2.28-5 .66a2.18 2.18 0 0 1 1.81-3.16z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m11 35.37c.87-.22 2.19.28 1.81 1.35s-1.59 1-2.41.47-.05-1.65.6-1.82z"
                ></path>

                <path
                  fill="#696a9b"
                  d="m7.22 44.15c.28 0 5.65 2.88 10.31 4.13a51.91 51.91 0 0 0 15.47 2.25c7.09 0 10.68-.09 15.65-1.31s7.82-2.88 8-2.75a.33.33 0 0 1 .1.47 23.6 23.6 0 0 1 -10.35 5.9 48.07 48.07 0 0 1 -22.15-.12c-8.19-2.07-12.5-4-14.22-5.41s-3.28-3.19-2.81-3.16z"
                ></path>
              </svg>
            </div>
            <div className="svg svg-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height="40px"
                width="40px"
              >
                <path
                  fill="#1d1d1b"
                  d="m6.9 48.93s-2.08.07-2.25-1.75-.33-4.67 3.59-8 6.66-3.34 10.5-9.42 5.58-16.83 6.83-19.58 1.83-6.92 7.33-7.18 6.34 4.75 7.42 9.17 3.42 14.33 7.92 19.91 8.5 7.76 10.25 12.92.58 6.42.16 6.5-4.41.33-4.41.33a7.34 7.34 0 0 1 .14 2.17c-.19.31-4.37.87-7.06.81s-4.38-.25-4.38-.62-.18-1.75-.18-1.75l-1.82.12s.44 2.5-.06 3.25a3.78 3.78 0 0 1 -2.25 1.19 6.7 6.7 0 0 1 -.81.06s.5 2.81.19 3.31-4.07.69-7.88.63-5.62-.13-5.69-.75a31.67 31.67 0 0 1 .32-3.38s-3.07-.18-3.38-1a18.08 18.08 0 0 1 -.06-4.06h-2.19a2.64 2.64 0 0 1 -.06 1.19c-.19.37-4.69.62-8 .31s-4.38-1.25-4.38-1.56.21-2.82.21-2.82z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m7.94 47.3s-1.31-.12-1.25-.56.75-5.56 4.19-7.06 8.5-1.88 10.81-4.38 3.69-8.75 3.94-11.5 0-9.12 1.19-12.44 2-6.86 6.69-6.87c7.48 0 7.25 27.56 10.62 29.75a17 17 0 0 0 5.38 2.56 16.46 16.46 0 0 1 6.25 6.88c1.87 4.37 1.5 6.43 1.5 6.43l-2.94.25a5.54 5.54 0 0 0 -5.56-4.87c-5.07-.13-5.76 5.87-5.76 5.87s-2.25.63-2.13.19-.31-14.87-1.06-17.62-2.38-3.57-3.06-3.69-1.13 1.44-1 1.62 1.93 0 2.31 5.82 1.31 16.87.62 17.37-4.81 1.06-9.06.81-5.56-.31-6.06-1.43.94-17.63 1.5-19.88 1.5-2.56 2.25-2.75a.91.91 0 0 0 .69-1.19c-.13-.31-1.19-.37-2.19-.12s-2.69 1.69-3.19 7.31-.94 12.5-1.12 12.5-3.32-.25-3.32-.25.57-6-4.56-6.25-5.68 3.5-5.68 3.5z"
                ></path>

                <path
                  fill="#e7413e"
                  d="m13.44 45.43a3 3 0 0 1 2.94 3.06c0 1.56.13 2.87-.25 3a17.3 17.3 0 0 1 -4.44-.06c-2.18-.25-2.56 0-2.56-.88s-.37-5.37 4.31-5.12z"
                ></path>

                <path
                  fill="#e7413e"
                  d="m48.69 47.18c3.06-.2 4 5 3.44 5.31a13.26 13.26 0 0 1 -4.06.44c-2 .06-3 0-3.13-.94s-.06-4.56 3.75-4.81z"
                ></path>

                <path
                  fill="#1f4863"
                  d="m24 23.68c.25 0 .31 3.62-1.07 7s-3.5 5.12-4.81 5.5a14.78 14.78 0 0 1 -2.94.43s4.25-2.87 6.13-6.87 2.69-6.06 2.69-6.06z"
                ></path>

                <path
                  fill="#1f4863"
                  d="m42.65 25a32 32 0 0 0 2.73 6.16c1.63 2.63 3.69 3.75 3.25 4s-3.31-.86-4.63-3.36a14 14 0 0 1 -1.35-6.8z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m27.38 16.43c-.06-.31.38-10.5 5.5-10.63s5.25 11.38 4.75 11.56-2-.93-5.62-.62-4.44.69-4.63-.31z"
                ></path>

                <path
                  fill="#1f4863"
                  d="m28.69 15.49c-.32-.19.63-8.75 4.38-8.38s3.75 8.25 3.19 8.38-2.07-.44-3.94-.38-3.19.63-3.63.38z"
                ></path>

                <g fill="#1d1d1b">
                  <path d="m36.51 20.36c.3-.25 2.25.82 2.18 1.38s.13.81-.18.75a9 9 0 0 1 -2.57-1.31c-.12-.32.19-.5.57-.82z"></path>

                  <path d="m35.63 23.55c.18-.18 2.94 1.44 3 1.88s.38 1-.06.93-3.44-1.62-3.5-2 .37-.62.56-.81z"></path>

                  <path d="m34.88 26.11c.31.07 4.19 1.82 4.06 2.25s.25.75-.31.63-4.19-1.75-4.19-2.25a.65.65 0 0 1 .44-.63z"></path>

                  <path d="m29.32 34.08c.35-.26 1 .25 2.66.32s2.75 0 2.75 0 .12.62 0 .81a9.3 9.3 0 0 1 -2.69.28 12 12 0 0 1 -2.85-.44.94.94 0 0 1 .13-.97z"></path>

                  <path d="m29.35 39c.35-.27 1 .25 2.66.31s2.75 0 2.75 0 .12.63 0 .81a9 9 0 0 1 -2.69.28 12.47 12.47 0 0 1 -2.84-.43.91.91 0 0 1 .12-.97z"></path>

                  <path d="m29.26 44.65c.35-.27 1 .25 2.65.31s2.75 0 2.75 0 .13.62 0 .81a8.85 8.85 0 0 1 -2.68.28 12 12 0 0 1 -2.85-.44.92.92 0 0 1 .13-.96z"></path>

                  <path d="m49.82 38.65c.12.15 2.41 2.09 2.34 2.37s-.18.41-.28.34a31.15 31.15 0 0 1 -2.47-2c-.06-.15.41-.71.41-.71z"></path>

                  <path d="m47.35 39.33c.28 0 4.22 3.19 4.16 3.57s-.16.62-.32.62-4.43-3.31-4.4-3.59.56-.6.56-.6z"></path>

                  <path d="m46.29 41.93a12.19 12.19 0 0 1 2.9 2.12c-.12.16.29.38-.37.35a9.48 9.48 0 0 1 -3-1.72c-.06-.19.31-.68.47-.75z"></path>
                </g>

                <path
                  fill="#e7413e"
                  d="m26.11 57.26c.07-.1 2.46.21 5.21.12a50.91 50.91 0 0 1 5.12-.2 8.22 8.22 0 0 1 .21 2.5 33 33 0 0 1 -6 .29c-2.7-.09-4.54 0-4.75-.29a5.38 5.38 0 0 1 .21-2.42z"
                ></path>
              </svg>
            </div>
            <div className="svg svg-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height="40px"
                width="40px"
              >
                <path
                  fill="#1d1d1b"
                  d="m18.68 10.74a26.63 26.63 0 0 1 11.25-3.53c4.25-.21 8.15.79 13.56 3.38s8.4 5.06 10.69 9.31 3.53 7.38 2.28 12.91-1.63 11.09-3.85 14.93-5.93 6.5-11.43 7.88-13.32 2.28-20.07-1.44-11.5-9.25-13.25-16.9-.31-11.63 1-15.22a23.64 23.64 0 0 1 9.82-11.32z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m20.55 11.31a22.85 22.85 0 0 1 7.69-2.6c4-.47 10.47 1.32 11.15 1.63s1.25.5 1 .69-2.53 2.18-3.34 2.31-3.62-.56-5.75-.47-3.56.5-4.59.5-2.5-1.13-3.5-1.22-3.13-.59-2.66-.84z"
                ></path>

                <path
                  fill="#85bfe9"
                  d="m18.58 12.87a5.82 5.82 0 0 1 4.16.34c1.62.88 1.44 1.25 3.65 1.22s3.29-.4 3.94-.25 3.41 1.35 5.85.88a10.42 10.42 0 0 0 4.28-1.75c.72-.47 1.15-1.25 1.59-1.19s4.41 2.41 4.34 2.66a4.52 4.52 0 0 1 -1.71 1.5 7.43 7.43 0 0 0 -2.79 3.46c-.5 1.47-.78 5.88-.12 6.32s2.34-.19 3 .31.81 2.06 1.91 2.19 1.56-.69 2.56 0 1 1.21 2.56 1.25 3-.32 3.09 0a2.47 2.47 0 0 1 -.12 1.43c-.16.1-5.44.72-6.69.79s-1 .34-1.69 0-1.78-1.63-3.39-1.88-6.53-.56-7.5-.56-1.25 0-1.35.47.1 5.18-.4 6.72-.16 4.06 1.65 4.78 3.69 1.09 3.94 1.75 1.13 5 1.91 6.47 1.87 3.15 1.5 3.46a20.31 20.31 0 0 1 -6 1.54 23.64 23.64 0 0 1 -5.78 0s-1.16-6-1.47-6.54a4.67 4.67 0 0 1 -.41-2.34c.13-.41 2.34-4.87 2.06-6s-.72-2.28-1.75-2.56-2.75 0-5.53 0a27.84 27.84 0 0 1 -5.34-.44c-.56-.12-.88 0-1.13-.28s-2.28-4-2-4.34 3.13-1.16 3.25-1.82-.06-2.25.66-2.31 3.87.38 4.87-.15 1.13-1.75 1.16-2.82-.37-3.4-.84-3.84-5-1.81-6.72-2.72-3.17-1.62-2.98-2.22a12.45 12.45 0 0 1 3.78-3.53z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m20.49 15c.54-.07.59.35.4.72s0 1.72.6 1.69a55.56 55.56 0 0 1 6.4-1.06 26.38 26.38 0 0 1 8 1.65c.75.41 1.1 2 1.16 2.47a29.44 29.44 0 0 1 -2.75 5.53c-.28.15-3.19-1-5.28-2s-3-1.47-3.09-1.88a6.23 6.23 0 0 0 -.5-1.69c-.19-.09-3-.28-4.35-1.09s-2.56-2.13-2.31-2.69a4.18 4.18 0 0 1 1.72-1.65z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m24.36 17.87a20.8 20.8 0 0 1 7.25.31c3.19.63 3.69 1.16 3.6 1.94s-1.28 4-1.72 3.84a41.78 41.78 0 0 1 -5.31-2.18c-.22-.32-.29-1.88-1.22-2.16s-2.88-.88-3.53-1.13-.5-.5-.35-.5 1.28-.12 1.28-.12z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m47.58 15.21c.21-.07 2.94 1.07 4.81 4.63s2.47 7.94 2.25 8.34-.9.44-1.53.25-3.11-1.56-3.65-1.56-1.41.47-1.78 0-1.5-1.87-2.63-1.87-1.37.19-1.56-.06-.81-5.53.37-6.5 2.22-1.59 2.69-2 .75-1.13 1.03-1.23z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m35.71 31c.36 0 5.72-.4 6.78.63s1.94 2.15 2.84 2.12 9.19-.75 9.19-.43-.94 7.5-2.38 11.15a15.91 15.91 0 0 1 -5.53 7.06c-1.15.66-2.34.91-2.43.72a21.82 21.82 0 0 1 -2.29-5.93c-.68-3.22-.87-4.72-1.93-5s-3.69-.9-4.19-1.53a4 4 0 0 1 -.56-1.87s.28-3.88.28-4.72.03-2.2.22-2.2z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m17.43 38.21a12.74 12.74 0 0 0 4.84.91c3.31.06 6.56-.31 6.91.09s.28 1.78-.44 3.1a21.38 21.38 0 0 0 -1.19 2.59 26.16 26.16 0 0 0 -3.16-2.5.59.59 0 0 0 -.34.69c.13.28 3 2.22 3.13 2.47a9.75 9.75 0 0 1 -.1 1.75 25.76 25.76 0 0 0 -3-2.38c-.37-.06-.62.85-.5 1s3.53 2.5 4 2.91a6.06 6.06 0 0 1 .84 2.53c-.09 0-3.9-3.09-4.12-3.13s-.28 1-.28 1 4.5 3.19 4.65 3.44a6.49 6.49 0 0 1 .44 1.88 32.57 32.57 0 0 1 -3.59-.91c-1.25-.47-2.35-.72-2.35-.81s-1.17-3.78-2.81-5.38a12.91 12.91 0 0 1 -2.36-2.65 31.09 31.09 0 0 1 -.35-3.72c-.04-.85-.41-2.88-.22-2.88z"
                ></path>

                <path
                  fill="#85bfe9"
                  d="m10.52 38.4c.19-.37 2.56.25 3.69.69s1.5 1 1.53 1.87-.13 4.66.65 5.35a10.71 10.71 0 0 1 3.07 3.28 7.26 7.26 0 0 1 1 2.19 20.15 20.15 0 0 1 -5.91-5.5c-3.19-4.13-4.12-7.69-4.03-7.88z"
                ></path>

                <path
                  fill="#4eae4d"
                  d="m9.61 36.18a17.66 17.66 0 0 1 -.12-9.65c1.37-5.69 4-8.72 4.22-8.69s5.4 3 7.5 4 2.22 1 2.37 1.44a10.13 10.13 0 0 1 -.19 3.34c-.18.09-3.93-.09-5 0s-1.39 1.59-1.31 2.19.13.87-.12 1.06-3.6 1.09-3.78 2 2.37 5.37 2 5.5-4.57-.16-5.57-1.19z"
                ></path>

                <g fill="#1d1d1b">
                  <path d="m11.36 25.18a19.09 19.09 0 0 1 1.16-3.65c.5-.75.72-.91.94-.85s.84.35.78.53-1.13 2.25-1.41 3.16 0 .91-.4 1-.94.03-1.07-.19z"></path>

                  <path d="m40 15.59c.16-.14 2.53-.72 2.69-.5s.34.44.18.56a11.75 11.75 0 0 1 -2.62.94c-.2-.1-.45-.85-.25-1z"></path>

                  <path d="m38.46 22.93c.15.16 1.47 2.28 1.31 2.47s0 .47-.34.31a6.24 6.24 0 0 1 -1.54-2.22c.11-.25.57-.56.57-.56z"></path>

                  <path d="m37 24.37a12.18 12.18 0 0 1 1.72 2.09c0 .19 0 .47-.31.38a8.07 8.07 0 0 1 -1.86-1.84c0-.16.45-.66.45-.63z"></path>

                  <path d="m49.33 19.65a7.18 7.18 0 0 1 2.5 1.22c0 .19.1.69-.15.59s-2.54-1-2.63-1.12.25-.66.28-.69z"></path>

                  <path d="m49.11 22c.08-.11 4 2.18 4 2.53s.35.59-.06.53a30.17 30.17 0 0 1 -4.25-2.16c-.12-.19.2-.75.31-.9z"></path>

                  <path d="m48.74 24a25.43 25.43 0 0 1 4.84 2.62c.06.28.28.59-.12.56a40.58 40.58 0 0 1 -4.94-2.37c-.09-.13.09-.75.22-.81z"></path>

                  <path d="m49.68 35.53a13.17 13.17 0 0 1 2.9 2.78c-.09.25 0 .37-.28.28a22.37 22.37 0 0 1 -3.12-2.72c.06-.16.34-.28.5-.34z"></path>

                  <path d="m48.11 37.43a28.41 28.41 0 0 1 3.35 3.16c0 .25-.13.47-.25.44a41.72 41.72 0 0 1 -3.44-3 4.75 4.75 0 0 1 .34-.6z"></path>

                  <path d="m47.11 39.46a23.35 23.35 0 0 1 3.35 3.32c-.07.25.06.4-.25.37a39.21 39.21 0 0 1 -3.53-3.15 3.19 3.19 0 0 1 .43-.54z"></path>

                  <path d="m46.33 41.12a29.14 29.14 0 0 1 3.41 3.28c0 .25-.1.41-.22.31a43.92 43.92 0 0 1 -3.84-3.09.84.84 0 0 1 .65-.5z"></path>

                  <path d="m45.71 44.12a16 16 0 0 1 3.06 2.72c0 .22-.16.37-.25.34a33.63 33.63 0 0 1 -3.19-2.5c-.03-.19.31-.53.38-.56z"></path>

                  <path d="m45 45.93c.17 0 3.25 2.69 3 2.94s-.12.37-.37.28a22.27 22.27 0 0 1 -3.13-2.69c.11-.15.33-.53.5-.53z"></path>

                  <path d="m35.18 43.43c.09-.14 1.31.31 1.28.6s0 .34-.16.34a5 5 0 0 1 -1.53-.44c0-.12.34-.4.41-.5z"></path>

                  <path d="m33.14 47.28a1.46 1.46 0 0 1 1.16 0c.47.22 1.16 1 1.78 1.1s1.1-.28 1.25-.19a.37.37 0 0 1 .16.47c-.1.16-.16.31-.41.37a2 2 0 0 1 -1.5-.15c-.58-.39-.94-.88-1.58-.88s-.57.12-.69 0-.42-.51-.17-.72z"></path>

                  <path d="m26 40.15c.25.16 2.06 1.75 2 2s-.19.5-.38.44a10.1 10.1 0 0 1 -2.15-1.82c-.01-.24.53-.62.53-.62z"></path>

                  <path d="m24.21 30.43c.12 0 2.81 4.19 2.59 4.41s-.34.44-.47.31a44.75 44.75 0 0 1 -2.84-4.34 1.31 1.31 0 0 1 .72-.38z"></path>

                  <path d="m25.24 30c0-.12.59-.38.78-.19a12 12 0 0 1 1.37 2.72c-.09.18 0 .47-.25.28a17.6 17.6 0 0 1 -1.9-2.81z"></path>

                  <path d="m30.74 29.71c.08-.11 1-1 1.28-1s1 0 .91.22-1.41 1.91-1.66 1.75a1.66 1.66 0 0 1 -.53-.97z"></path>
                </g>
              </svg>
            </div>
            <div className="svg svg-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height="40px"
                width="40px"
              >
                <g fill="#1d1d1b">
                  <path d="m15.69 55.54a2.75 2.75 0 0 0 -.62-2.69 2.37 2.37 0 0 0 -2.72-.47s-1.88-2-2.6-.65.79 2.69.79 2.69a1.9 1.9 0 0 0 .46 2.34 2.88 2.88 0 0 0 2.6.37s2.37 1.6 3 .44-.91-2.03-.91-2.03zm-4.84-1.72s-.91-1.09-.53-1.56 1.56.47 1.56.47-.97 1.09-1.03 1.09zm4.94 3.38c-.32.22-1.16-.38-1.16-.38l.44-.69c.28.16 1.03.87.72 1.07z"></path>

                  <path d="m27 33.1c.05-.53-3.81-2.25-3.87-7.18s2.37-9 8.31-10.19 8.5-.13 8.94-.56.75-2.75-2.75-4.82-14.16-3.35-22.47 4.57-7.44 16.46-6.59 19.87a20.86 20.86 0 0 0 8 11.91c4.84 3.34 7.53 4.43 11.78 5.09s8.75-1.41 11.19-3.06 3-3.41 2.93-4.16-.9-1.94-1.46-1.78-5.13 2.22-9.22 1-5.35-4-5.32-6 .41-3.5.53-4.69z"></path>

                  <path d="m7.79 8.7c.23-.08 1.71.12 1.78 0s.25-2.16.72-2.1.53 1.72.87 1.78 1.66-.09 1.75.25-1.09 1.35-1.06 1.5.25.88 0 1-1.25-.28-1.28-.18-1.32 1.68-1.57 1.56-.5-.16-.46-.34.62-2.17.62-2.17l-1.5-.8c-.16-.1-.06-.44.13-.5z"></path>

                  <path d="m7.16 18.73c.76-.47 1.28 0 1.13.84a.88.88 0 0 1 -1.38.53.89.89 0 0 1 .25-1.37z"></path>

                  <path d="m37.29 4.82a1.71 1.71 0 0 1 2.4 1.69 1.8 1.8 0 0 1 -3 1.16 1.74 1.74 0 0 1 .6-2.85z"></path>
                </g>

                <path
                  fill="#ffe19b"
                  d="m37.58 5.55a.92.92 0 0 1 1.3.91 1 1 0 0 1 -1.64.63.94.94 0 0 1 .34-1.54z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m47 12c.19 0 0-2.84.34-3s1.28 1.78 1.62 1.75 1.63-.78 2-.56-.32 2.43-.25 2.59 1 1.41.65 1.66-1.87-.32-2-.22-.84 1.44-1.15 1.4-.35-2-.69-2.09-2.06-.28-2.16-.66 1.46-.87 1.64-.87z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m54.13 17.23a2.52 2.52 0 0 1 2.75 2.77c-.22 2.15-3 2.25-4.16 1a2.31 2.31 0 0 1 1.41-3.77z"
                ></path>

                <path
                  fill="#ffe19b"
                  d="m54.32 18.26a1.37 1.37 0 0 1 1.49 1.48c-.12 1.17-1.61 1.22-2.26.56a1.26 1.26 0 0 1 .77-2.04z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m34.75 21.67c1-.45 3.16 0 2.57 2.06s-3.32 1.56-3.82.47a2 2 0 0 1 1.25-2.53z"
                ></path>

                <path
                  fill="#ffe19b"
                  d="m35 22.34c.62-.27 1.88 0 1.53 1.22a1.29 1.29 0 0 1 -2.27.28 1.18 1.18 0 0 1 .74-1.5z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m45.66 29.13s1.38-2.75 1.81-2.81.47 3 .47 3 1.94.16 1.88.47-1.57 1.06-1.57 1.06.54 2.19.25 2.35-1.4-1.66-1.4-1.66-2.13 1.09-2.31.84.46-2.12.46-2.12-1.5-.53-1.46-.78 1.65-.16 1.87-.35z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m35.44 34.13a1.12 1.12 0 0 1 1.31 1.44 1.24 1.24 0 0 1 -2 .31c-.59-.68.13-1.59.69-1.75z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m50 37.13c1-.26 2.53-.28 2.94 1.5s-1.66 2.54-3.31 2.13-1.94-3.03.37-3.63z"
                ></path>

                <path
                  fill="#ffe19b"
                  d="m50.26 37.92c.57-.14 1.43-.15 1.65.85s-.91 1.42-1.86 1.23a1 1 0 0 1 .21-2.08z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m8.6 46a1.18 1.18 0 0 1 1.87.94c0 1.09-1.47 1.34-2 .9a1.22 1.22 0 0 1 .13-1.84z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m34.54 54.1a1.9 1.9 0 0 1 2.53 2 2.29 2.29 0 0 1 -3.5 1.38c-1.5-1.16-.97-2.88.97-3.38z"
                ></path>

                <path
                  fill="#ffe19b"
                  d="m34.7 55a1 1 0 0 1 1.3 1 1.2 1.2 0 0 1 -1.84.72c-.75-.58-.47-1.48.54-1.72z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m49.22 52.2c.07-.1 1.6-2.82 2-3s.41-.16.5 0a27.3 27.3 0 0 1 0 2.84s1 0 1 .28-1.06 1.16-1.06 1.16.31 1.94 0 2.09a.75.75 0 0 1 -.69-.09l-.43-1.09a10.81 10.81 0 0 1 -2.22.87c-.16-.12-.6-.41-.38-.59a8.27 8.27 0 0 0 .78-1.28s-2.12-.19-2.18-.44-.07-.6.09-.66 2.59-.09 2.59-.09z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m11.75 54s1.16-1.81 2.5-.81 0 3-.09 2.94a4.64 4.64 0 0 1 -2.41-2.13z"
                ></path>

                <path
                  fill="#cbe7f5"
                  d="m11.5 55.17s1 1 1.32 1.21l.28.22a2.61 2.61 0 0 1 -1.53-.15c-.63-.35-.07-1.28-.07-1.28z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m12.63 53.88s.56-.56.91-.53a.69.69 0 0 1 .5.28l-.63.38-.56.34a2.22 2.22 0 0 0 -.22-.47z"
                ></path>

                <path
                  fill="#e6e4da"
                  d="m38.29 13.87c.24-.06-1-2.1-2.86-2.81a16.74 16.74 0 0 0 -9.23-.14 25.3 25.3 0 0 0 -9.2 4.66 19 19 0 0 0 -4.84 6.42 14.81 14.81 0 0 0 -2.16 8 18.87 18.87 0 0 0 3.42 10.1 24.2 24.2 0 0 0 6 6 9.61 9.61 0 0 0 2 1.17s-.42-1.27-.22-1.35a1 1 0 0 1 .8.08 12.69 12.69 0 0 0 .23 1.64c.13.07.61.44.61.38a21.52 21.52 0 0 1 -.23-2.71c.1-.13 1-.1 1.08.1s0 2.71.08 2.8a2.49 2.49 0 0 0 .65.41c.06 0-.1-1.81 0-1.81s.77.06.83.19 0 1.85.09 2a9.45 9.45 0 0 0 5.32 1 15 15 0 0 0 7.46-2.31c1.67-1 2.71-2.31 2.6-2.59s-.14-.35-.29-.37-6.37 2.37-10.43.27-5.25-4.85-5.41-6.31.6-4.61.5-4.84-3.84-3.14-4-6.58.31-6.37 3.06-9.27a14.77 14.77 0 0 1 8.85-4.27c1.85-.02 5.2.16 5.29.14z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m24.1 13.19a1.58 1.58 0 0 1 2.08 1.2 1.73 1.73 0 0 1 -2.46 1.8c-1.64-.57-.83-2.57.38-3z"
                ></path>

                <path
                  fill="#ffffff"
                  d="m24.31 14a.76.76 0 0 1 1 .58.83.83 0 0 1 -1.18.86c-.79-.29-.4-1.25.18-1.44z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m17.47 17.31c.77-.54 3.15-.46 3.36 1.42s-1.83 3.35-3.4 2.27a2.34 2.34 0 0 1 .04-3.69z"
                ></path>

                <path
                  fill="#ffffff"
                  d="m18 18.11c.44-.32 1.82-.27 1.94.82a1.33 1.33 0 0 1 -2 1.34 1.36 1.36 0 0 1 .06-2.16z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m14.12 21.52c.14-.13.79 0 .75.37a22.52 22.52 0 0 1 -1.54 4.21c-.31.27-.75.4-.92 0a10.5 10.5 0 0 1 1.71-4.58z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m14.27 28.77c1.34-.56 4.25 0 3.77 3.44s-3.86 2.52-4.75 1.14-1.21-3.66.98-4.58z"
                ></path>

                <path
                  fill="#ffffff"
                  d="m14.59 29.61c.94-.39 3 0 2.64 2.41s-2.7 1.76-3.32.8-.85-2.56.68-3.21z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m19.37 37.67c1.34-.57 4.25 0 3.77 3.43s-3.85 2.52-4.75 1.15-1.21-3.67.98-4.58z"
                ></path>

                <path
                  fill="#ffffff"
                  d="m19.69 38.51c.94-.39 3 0 2.64 2.41s-2.69 1.76-3.32.8-.85-2.57.68-3.21z"
                ></path>

                <path
                  fill="#1d1d1b"
                  d="m27.66 45.87a1.14 1.14 0 0 1 1.63 1.13c0 .9-.67 1.58-1.61 1.25a1.26 1.26 0 0 1 -.02-2.38z"
                ></path>

                <path
                  fill="#ffffff"
                  d="m27.87 46.5a.53.53 0 0 1 .76.53c0 .42-.32.75-.76.59a.59.59 0 0 1 0-1.12z"
                ></path>
              </svg>
            </div>
            <div className="btn anim">See more</div>
          </div>
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("up", "spring", 0.2, 2)}
        className="absolute xs:bottom-5 bottom-2  w-full flex justify-center items-center"
      >
        <a href="#astronauts">
          {window.innerWidth > 1280 && (
            <div className="w-[35px ] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className=" w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          )}
        </a>
      </motion.div>
    </div>
  );
};

export default ShaderGradientPage;
