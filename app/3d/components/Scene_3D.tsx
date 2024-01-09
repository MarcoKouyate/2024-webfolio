import React from "react";
import MemoHead from "./MemoHead";
import Environment from "./Environment";
import { OrbitControls } from "@react-three/drei";
import ImportedMesh from "./ImportedMesh";
import { Plane } from "./Plane";

const Scene_3D = () => {
  return (
    <>
      <MemoHead />
      {/* <ImportedMesh /> */}
      <group rotation={[0, 2, 0]}>
        <Plane
          position={[0, 0, 5]}
          rotation={[0, 2, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </group>

      <Environment />
      <OrbitControls />
    </>
  );
};

export default Scene_3D;
