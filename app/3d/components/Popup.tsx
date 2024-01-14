import Button from "@/app/components/Button";
import React from "react";

const Popup = () => {
  return (
    <div className="absolute z-10 flex items-center justify-center w-full">
      <p className="bg-blue-500 m-2 p-2 rounded-md">Popup</p>
      <Button link="../">Home</Button>
    </div>
  );
};

export default Popup;
