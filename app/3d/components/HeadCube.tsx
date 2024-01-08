import React from "react";

const HeadCube = () => {
  return (
    <>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
};

export default HeadCube;
