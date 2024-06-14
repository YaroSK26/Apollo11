"use client";
import Rocket3D from "@/components/Rocket3D";
import ShaderGradientPage from "@/components/ShaderGradient";
import React, { useEffect, useState } from "react";
import useLenis from "../components/lenis";
import "../css/loader.css";
import Apollo11 from "@/components/Apollo11";
import Experience from "@/components/Experience";
import Video from "@/components/Video";
import Footer from "@/components/Footer";

const App = () => {


  function useScript(src) {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.dataset.useServiceCore = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [src]);
  }
  useScript("https://static.elfsight.com/platform/platform.js");
  useLenis();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader rocket-preloader  ">
        <p className="mt-16  text-lg  ">Starting engine...</p>
        <div className="rocket"></div>
      </div>
    );
  }

  document.addEventListener("mousemove", (event) => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${event.pageX}px`;
    star.style.top = `${event.pageY}px`;
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  });

  return (
    <div>
      <ShaderGradientPage></ShaderGradientPage>

      {/* <Rocket3D></Rocket3D>       */}

      <Apollo11></Apollo11>
      <Experience></Experience>
      <Video></Video>

      <Footer></Footer>
    </div>
  );
};

export default App;
