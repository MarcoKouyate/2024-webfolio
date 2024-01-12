import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { RefObject } from "react";

const custom_controls = (target: RefObject<OrbitControlsImpl>) => {
  console.log(target.current);
};

const CustomCamera = () => {
  const ref = useRef<OrbitControlsImpl>(null);

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      onChange={() => custom_controls(ref)}
      autoRotate={true}
      autoRotateSpeed={0.5}
      ref={ref}
    />
  );
};

export default CustomCamera;
