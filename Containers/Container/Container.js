import React from "react";
import Sidebar from "../Sidebar";
import ContainerWrapper from "./ContainerWrapper";

const Container = ({ children, data }) => {
  return (
    <ContainerWrapper>
      <Sidebar data={data} />
      {children}
    </ContainerWrapper>
  );
};

export default Container;
