import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

const Button = ({ children, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="bg-gradient-to-l from-sky-500 to-indigo-500 hover:from-sky-500 hover:to-cyan-500 bg-cover w-fit px-3 py-2 rounded-full text-white font-bold drop-shadow-md opacity-50 hover:opacity-100">
        {children}
      </div>
    </a>
  );
};

export default Button;
