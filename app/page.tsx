"use client";
import React from "react";
import { Container } from "./styled";
import Header from "@/components/Header";
import ContentImage from "@/components/ContentImage";
import Content from "@/components/Content";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <Container>
      <Header />
      {/* <ContentImage src="/test_image.webp" />
      <Content /> */}
    </Container>
  );
}
