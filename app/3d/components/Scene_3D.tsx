import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

import MemoHead from "./MemoHead";
import Environment from "./Environment";
import { Plane } from "./Plane";
import CustomCamera from "./CustomCamera";

const Scene_3D = () => {
  const [planeRotation, setPlaneRotation] = useState(0);

  useFrame(() => {
    setPlaneRotation(planeRotation + 0.02);
  });

  return (
    <>
      <MemoHead />
      {/* <ImportedMesh /> */}
      <group rotation={[0, planeRotation, 0]}>
        <Plane
          position={[0, 0, 5]}
          rotation={[0, 2, -0.5]}
          scale={[0.5, 0.5, 0.5]}
        />
      </group>

      <Environment />

      <CustomCamera face="forward" />
    </>
  );
};

export default Scene_3D;
