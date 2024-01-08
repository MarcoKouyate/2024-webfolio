import React from "react";
import Face from "./Face";
import Hair from "./Hair";
import HeadCube from "./HeadCube";

const MemoHead = () => {
  return (
    <>
      <HeadCube />
      <Hair />
      <Face />
    </>
  );
};

export default MemoHead;
