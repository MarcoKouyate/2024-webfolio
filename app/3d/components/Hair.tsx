import React from "react";
import { DoubleSide } from "three";

const Hair = () => {
  return (
    <>
      <mesh position={[-0.25, 0.8, 1.02]} rotation={[0, 0, 0.1]}>
        <planeGeometry args={[1.8, 1.6]} />
        <meshStandardMaterial color={"blue"} side={DoubleSide} />
      </mesh>
      <mesh position={[0.9, 0.8, 1.02]} rotation={[0, 0, -0.1]}>
        <planeGeometry args={[0.5, 1.6]} />
        <meshStandardMaterial color={"blue"} side={DoubleSide} />
      </mesh>
    </>
  );
};

export default Hair;
