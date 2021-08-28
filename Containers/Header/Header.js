import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Image from "next/image";
import banner from "../../img/banner.png";

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="header">
        <div>{children}</div>
      <Image src={banner} alt="img" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
