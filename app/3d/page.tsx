"use client";

import Canvas_3D from "./components/Canvas_3D";
import Popup from "./components/Popup";

const App_3D = () => {
  return (
    <section className="h-screen w-full relative bg-slate-300">
      <Popup />
      <Canvas_3D />
    </section>
  );
};

export default App_3D;
