"use client";

import React from "react";
import { ContentHeader, Subtitle, Author, Date } from "./styled";

const Header = () => {
  return (
    <>
      <h1>
        挑戰「最強降噪耳機」地位？Sony WF-1000XM5 藍芽耳機，有哪七大特色？
      </h1>
      <ContentHeader>
        <Subtitle>
          Sony WF-1000XM5藍芽降躁耳機外型精巧又功能強大，但是價格比Airpos Pro
          2高了一千多，到底還有哪裡厲害？
        </Subtitle>
        <Author>作者：小明</Author>
        <Date>發布日期：2021年10月1日</Date>
      </ContentHeader>
    </>
  );
};

export default Header;
