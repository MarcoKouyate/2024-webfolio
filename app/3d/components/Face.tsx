import React from "react";

const Face = () => {
  return (
    <>
      <mesh position={[0, 0, 1.03]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
};

export default Face;
