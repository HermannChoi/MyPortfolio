"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "./projectTemplates/FirstInfo";
import MiddleInfo from "./projectTemplates/MiddleInfo";
import Footer from "./projectTemplates/Footer";
import {
  cpkNoteFirstInfo,
  cpkNoteFooter,
  cpkNoteInfo,
} from "@/app/constants/projectInfos/cpkNote";

const CpkNote = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={cpkNoteFirstInfo} />
      <MiddleInfo info={cpkNoteInfo} />
      <Footer info={cpkNoteFooter} />
    </div>
  );
};

export default CpkNote;
