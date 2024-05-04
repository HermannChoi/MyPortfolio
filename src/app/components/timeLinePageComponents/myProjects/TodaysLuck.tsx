"use client";
/** @jsxImportSource @emotion/react */

import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import Image from "next/image";
import TL1 from "@/app/assets/projectImages/todaysLuck/image3.png";
import TL2 from "@/app/assets/projectImages/todaysLuck/image2.png";
import TL3 from "@/app/assets/projectImages/todaysLuck/image4.png";
import TL4 from "@/app/assets/projectImages/todaysLuck/image5.png";
import {
  delayShowUpAni,
  flexColumnCenter,
} from "@/app/styles/commonStyles/commonStyles";
import {
  TLFooter,
  todaysLuckFirstInfo,
  todaysLuckInfo,
} from "@/app/constants/projectInfos/todaysLuck";
import Footer from "../../projectTemplates/Footer";
import FirstInfo from "../../projectTemplates/FirstInfo";
import MiddleInfo from "../../projectTemplates/MiddleInfo";

const TodaysLuck = () => {
  const images = [TL2, TL3, TL4];

  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={todaysLuckFirstInfo} />
      <MiddleInfo info={todaysLuckInfo} />
      <Footer info={TLFooter} />
    </div>
  );
};

export default TodaysLuck;
