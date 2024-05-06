"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import React from "react";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  earthIdeNFirstInfo,
  earthIdeNFooter,
  earthIdeNInfo,
} from "@/app/constants/projectInfos/earthIdeN";

const EarthIdeN = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={earthIdeNFirstInfo} />
      <MiddleInfo info={earthIdeNInfo} />
      <Footer info={earthIdeNFooter} />
    </div>
  );
};

export default EarthIdeN;
