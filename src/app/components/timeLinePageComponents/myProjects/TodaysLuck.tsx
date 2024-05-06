"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import {
  TLFooter,
  todaysLuckFirstInfo,
  todaysLuckInfo,
} from "@/app/constants/projectInfos/todaysLuck";
import Footer from "./projectTemplates/Footer";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";

const TodaysLuck = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={todaysLuckFirstInfo} />
      <MiddleInfo info={todaysLuckInfo} />
      <Footer info={TLFooter} />
    </div>
  );
};

export default TodaysLuck;
