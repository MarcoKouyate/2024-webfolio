import React from "react";
import CustomSky from "./CustomSky";

const Environment = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color={"white"} position={[0, 0, 5]} />
      <CustomSky />
    </>
  );
};

export default Environment;
