import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import Scene_3D from "./Scene_3D";

const Canvas_3D = () => {
  return (
    <>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene_3D />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Canvas_3D;
