"use client";
/** @jsxImportSource @emotion/react */

import { timelineStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import { projectsInfo } from "@/app/constants/timeLine/projectsInfo";

const TimeLineContents = () => {
  const { order, setOrder } = useTimeLineStore();

  return (
    <div css={[timelineStyles.line]}>
      <div css={[timelineStyles.light]}></div>
      {projectsInfo.map((project, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setOrder(i);
              console.log(i, order);
            }}
            css={[
              order === i && timelineStyles.selectedOne,
              timelineStyles.round(project.color, project.name, project.date),
            ]}
          ></button>
        );
      })}
    </div>
  );
};

export default TimeLineContents;
