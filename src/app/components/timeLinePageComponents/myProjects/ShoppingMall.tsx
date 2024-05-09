import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import React from "react";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  shoppingMallFirstInfo,
  shoppingMallFooter,
  shoppingMallInfo,
} from "@/app/constants/projectInfos/shoppingMall";

const ShoppingMall = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={shoppingMallFirstInfo} />
      <MiddleInfo info={shoppingMallInfo} />
      <Footer info={shoppingMallFooter} />
    </div>
  );
};

export default ShoppingMall;
