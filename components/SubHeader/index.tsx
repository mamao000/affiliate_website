import React from "react";
import { SubHeaderWrapper } from "./styled";

const SubHeader = ({ subHeaderText }: { subHeaderText: string }) => {
  return (
    <SubHeaderWrapper>
      <h2>
        <strong>{subHeaderText}</strong>
      </h2>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
