"use client";
/** @jsxImportSource @emotion/react */

import {
  flexColumnCenter,
  widthHeightFull,
} from "@/app/styles/commonStyles/commonStyles";
import TimeLineContents from "@/app/components/timeLinePageComponents/TimeLineContents";
import { timelinePageStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";

const TimeLine = () => {
  return (
    <div css={timelinePageStyles.page}>
      <main
        css={[
          flexColumnCenter,
          widthHeightFull,
          `padding: 50px;row-gap: 100px;`,
        ]}
      >
        <h1 css={timelinePageStyles.title}>Time Line of My Projects</h1>
        <p css={[timelinePageStyles.guide]}>
          원들을 클릭하여 프로젝트를 보세요!
        </p>
        <TimeLineContents />
      </main>
    </div>
  );
};

export default TimeLine;
