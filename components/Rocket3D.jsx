"use client";

import { Application } from "@splinetool/runtime";
import React, { useEffect } from "react";

const Rocket3D = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/6hgYeMjbz7GeQr84/scene.splinecode");
  }, []);
  return (
    <div>
      <canvas id="canvas3d" style={{ width: "100%", height: "100vh" }}></canvas>
    </div>
  );
};

export default Rocket3D;
