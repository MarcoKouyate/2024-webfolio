import React from "react";
import { Sky } from "@react-three/drei";

const Environment = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color={"white"} position={[0, 0, 5]} />
      <Sky />
    </>
  );
};

export default Environment;
