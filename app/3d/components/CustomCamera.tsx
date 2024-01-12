import React, { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";

const custom_controls = (
  controls: RefObject<OrbitControlsImpl>,
  isDragging: boolean,
  angles: number[]
) => {
  console.log(controls.current);
  if (controls.current && !isDragging) {
    const [x, y] = angles;
    controls.current.setAzimuthalAngle(x);
    controls.current.setPolarAngle(y);
  }
};

const CustomCamera = () => {
  const controls = useRef<OrbitControlsImpl>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [angles, setAngles] = useState([0, Math.PI / 2]);
  useFrame((state, delta) => custom_controls(controls, isDragging, angles));

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      onStart={(e) => setIsDragging(true)}
      onEnd={(e) => setIsDragging(false)}
      autoRotateSpeed={0.5}
      ref={controls}
    />
  );
};

export default CustomCamera;
