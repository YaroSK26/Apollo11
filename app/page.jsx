"use client";
import Rocket3D from "@/components/Rocket3D";
import ShaderGradientPage from "@/components/ShaderGradient";
import React, { useEffect, useState } from "react";
import useLenis from "../components/lenis";
import "../css/loader.css";
import Apolo11 from "@/components/Apolo11";

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

      <Apolo11></Apolo11>
    </div>
  );
};

export default App;
