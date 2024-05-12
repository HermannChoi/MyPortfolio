"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  myPortfolioFirstInfo,
  myPortfolioFooter,
  myPortfolioInfo,
} from "@/app/constants/projectInfos/myPortfolio";

const MyPortfolio = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={myPortfolioFirstInfo} />
      <MiddleInfo info={myPortfolioInfo} />
      <Footer info={myPortfolioFooter} />
    </div>
  );
};

export default MyPortfolio;
