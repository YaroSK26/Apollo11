"use client";
import Rocket3D from "@/components/Rocket3D";
import ShaderGradientPage from "@/components/ShaderGradient";
import React, { useEffect, useState } from "react";
import useLenis from "../components/lenis";
import "../css/loader.css";
import Apollo11 from "@/components/Apollo11";
import Experience from "@/components/Experience";
import Video from "@/components/Video";

const App = () => {
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

  return (
    <div>
      <ShaderGradientPage></ShaderGradientPage>

      <Rocket3D></Rocket3D>      

      <Apollo11></Apollo11>
      <Experience></Experience>
      <Video></Video>
      
    </div>
  );
};

export default App;
