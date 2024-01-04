import React from "react";

interface Props {
  gradient_color: string;
}

const TransparentBackgroundGradient = ({ gradient_color }: Props) => {
  return (
    <div
      className={
        "fixed bottom-0 right-0 min-w-full min-h-full bg-gradient-to-r from-gray-900 -z-10"
      }
    ></div>
  );
};

export default TransparentBackgroundGradient;
