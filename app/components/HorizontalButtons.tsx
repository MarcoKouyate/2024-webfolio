import React from "react";
import Button from "./Button";

const HorizontalButtons = () => {
  return (
    <div className="flex justify-around max-w-96 m-auto mt-8">
      <Button link="https://www.linkedin.com/in/marcokouyate/">LinkedIn</Button>
      <Button link="https://github.com/MarcoKouyate">Github</Button>
      <Button link="https://marcokouyate.notion.site/e15976482eea44d9a419cde7c7b0d0c6">
        Portfolio
      </Button>
      <Button link="/3d">3D App</Button>
    </div>
  );
};

export default HorizontalButtons;
