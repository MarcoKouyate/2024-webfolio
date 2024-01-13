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
  if (controls.current && !isDragging) {
    const [x, y] = angles;
    controls.current.setAzimuthalAngle(x);
    controls.current.setPolarAngle(y);
  }
};

interface Props {
  face: string;
}

const CustomCamera = ({ face }: Props) => {
  const controls = useRef<OrbitControlsImpl>(null);
  const [isDragging, setIsDragging] = useState(false);

  interface KeySignature {
    [key: string]: number[];
  }

  const orbit_positions: KeySignature = {
    forward: [0, Math.PI / 2],
    above: [0, 0],
    below: [0, Math.PI],
    back: [Math.PI, Math.PI / 2],
    left: [Math.PI / 2, Math.PI / 2],
    right: [-(Math.PI / 2), Math.PI / 2],
  };

  const [angles, setAngles] = useState(orbit_positions[face]);
  useFrame(() => custom_controls(controls, isDragging, angles));

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
