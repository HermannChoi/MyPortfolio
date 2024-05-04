"use client";
/** @jsxImportSource @emotion/react */

import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import FirstInfo from "../../projectTemplates/FirstInfo";
import MiddleInfo from "../../projectTemplates/MiddleInfo";
import Footer from "../../projectTemplates/Footer";
import {
  githubFinderFooter,
  githubFinderInfo,
  githubFirstInfo,
} from "@/app/constants/projectInfos/githubFinder";

const GithubFinder = () => {
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={githubFirstInfo} />
      <MiddleInfo info={githubFinderInfo} />
      <Footer info={githubFinderFooter} />
    </div>
  );
};

export default GithubFinder;
