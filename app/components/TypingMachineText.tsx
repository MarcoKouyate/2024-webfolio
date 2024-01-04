"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingMachineText = () => {
  return (
    <main>
      <p className="text-white m-20 font-bold text-2xl bottom-0 fixed">
        <span className="text-cyan-500"> {">_"}</span> Hi, I am
        <span className="typewrite text-cyan-500">
          <Typewriter
            words={[
              " a game programmer.",
              " a VR enthusiast.",
              " a creative engineer.",
            ]}
            typeSpeed={120}
            cursor={true}
            loop={0}
          />
        </span>
      </p>
    </main>
  );
};

export default TypingMachineText;
