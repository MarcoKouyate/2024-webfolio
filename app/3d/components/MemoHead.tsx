import React from "react";

const MemoHead = () => {
  return (
    <>
      <mesh rotation={[5, 12, 70]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default MemoHead;
