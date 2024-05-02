"use client";
/** @jsxImportSource @emotion/react */

import { timelineStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import { projectsInfo } from "@/app/constants/projectsInfo";

const TimeLineContents = () => {
  const { setOrder } = useTimeLineStore();

  return (
    <div css={[timelineStyles.line]}>
      <div css={[timelineStyles.light]}></div>
      {projectsInfo.map((project, i) => {
        return (
          <button
            key={i}
            onClick={() => setOrder(i)}
            css={[
              timelineStyles[`round${project.small === 2 ? "2" : ""}`](
                project.color,
                project.name,
                project.date
              ),
            ]}
          ></button>
        );
      })}
    </div>
  );
};

export default TimeLineContents;
