import React from "react";
import { Sky, useGLTF } from "@react-three/drei";

const CustomSky = () => {
  const sky = useGLTF("./models/Sky.glb");
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default CustomSky;
