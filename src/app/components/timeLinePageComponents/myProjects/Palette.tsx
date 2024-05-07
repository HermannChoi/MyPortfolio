"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  paletteFirstInfo,
  paletteFooter,
  paletteInfo,
} from "@/app/constants/projectInfos/palette";

const Palette = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={paletteFirstInfo} />
      <MiddleInfo info={paletteInfo} />
      <Footer info={paletteFooter} />
    </div>
  );
};

export default Palette;
