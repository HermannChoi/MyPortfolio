"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import {
  netflixFirstInfo,
  netflixFooter,
  netflixInfo,
} from "@/app/constants/projectInfos/netflix";
import Footer from "../../projectTemplates/Footer";
import FirstInfo from "../../projectTemplates/FirstInfo";
import MiddleInfo from "../../projectTemplates/MiddleInfo";

const Netflix = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={netflixFirstInfo} />
      <MiddleInfo info={netflixInfo} />
      <Footer info={netflixFooter} />
    </div>
  );
};

export default Netflix;
