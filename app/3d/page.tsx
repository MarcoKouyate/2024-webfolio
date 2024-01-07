"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";

const App_3D = () => {
  return (
    <section className="h-screen w-full relative bg-slate-300">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <mesh rotation={[5, 12, 70]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color={"red"} position={[0, 0, 5]} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default App_3D;
