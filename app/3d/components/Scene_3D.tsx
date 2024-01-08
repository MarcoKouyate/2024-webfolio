import React from "react";
import MemoHead from "./MemoHead";
import Environment from "./Environment";
import { OrbitControls } from "@react-three/drei";

const Scene_3D = () => {
  return (
    <>
      <MemoHead />
      <Environment />
      <OrbitControls />
    </>
  );
};

export default Scene_3D;
