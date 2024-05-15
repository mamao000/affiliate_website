import React from "react";
import { ContentWrapper } from "./styled";
import Paragraph from "../Paragraph";
import SubHeader from "../SubHeader";

const Content = () => {
  return (
    <ContentWrapper>
      <Paragraph contentText="根據Sony的官方資料，「WF-1000XM5」採用全新研發的驅動元件，完美還原音源的高音質，並搭載更好的通話性能。更重要的是，依據Sony與日本電子與資訊科技產業協會（JEITA）合作研究，這款新產品擁有全球無線藍芽耳機大眾款中，最強降噪功能。但其他條件呢?"></Paragraph>
      <SubHeader subHeaderText="二、更舒適貼合"></SubHeader>
      <Paragraph contentText="前面提到XM4性能極佳，許多人稱讚其在耳道很容易固定又不容易脫落，但這也代表可能貼得太緊而不舒服。XM5在耳塞塑膠部分光滑又尺寸較小，戴起來較沒有疲勞感，此外這次附上有高科技泡棉的耳塞提供四種尺寸，也就是比一般無線耳機多了超級小的尺寸。"></Paragraph>
    </ContentWrapper>
  );
};

export default Content;
