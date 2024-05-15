import React from "react";
import { ImageWrapper } from "./styled";
import Image from "next/image";

const ContentImage = ({ src }: { src: string }) => {
  return (
    <ImageWrapper>
      <Image
        src={src}
        alt="Picture of the author"
        layout="responsive"
        width={500}
        height={500}
      />
    </ImageWrapper>
  );
};

export default ContentImage;
