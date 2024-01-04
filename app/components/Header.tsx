import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <div className="text-center text-5xl text-white mt-10">{children}</div>
  );
};

export default Header;
