"use client";
import { LoadingWrapper } from "./styled";
import Image from "next/image";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Image src="/loading.svg" alt="Loading..." width={150} height={150} />
    </LoadingWrapper>
  );
}
