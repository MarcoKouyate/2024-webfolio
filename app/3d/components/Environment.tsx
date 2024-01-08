import React from "react";
import { Sky } from "@react-three/drei";

const Environment = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color={"red"} position={[0, 0, 5]} />
      <Sky />
    </>
  );
};

export default Environment;
