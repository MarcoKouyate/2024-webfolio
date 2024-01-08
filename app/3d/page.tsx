"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import Scene_3D from "./components/Scene_3D";

const App_3D = () => {
  return (
    <section className="h-screen w-full relative bg-slate-300">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene_3D />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default App_3D;
