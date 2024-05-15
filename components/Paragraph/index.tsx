import React from "react";
import { ParagraphWrapper } from "./styled";

const Paragraph = ({ contentText }: { contentText: string }) => {
  return <ParagraphWrapper>{contentText}</ParagraphWrapper>;
};

export default Paragraph;
