import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";

import TheatreComponent from "./TheatreComponent";

const Canvas_3D = () => {
  return (
    <>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <TheatreComponent />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Canvas_3D;
