"use client";
/** @jsxImportSource @emotion/react */

import { timelineStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import { projectsInfo } from "@/app/constants/timeLine/projectsInfo";
import { delayShowUpAni2 } from "@/app/styles/commonStyles/commonStyles";
import { scrollToTop } from "@/app/utils/scrollToTop";

const TimeLineContents = () => {
  const { order, setOrder } = useTimeLineStore();

  return (
    <div css={[timelineStyles.line]}>
      {projectsInfo.map((project, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setOrder(i);
              scrollToTop(150);
            }}
            css={[
              order === i && timelineStyles.selectedOne(project.color),
              timelineStyles.round(project.color, project.name, project.date),
              delayShowUpAni2(i / 6 + 1.5),
            ]}
          >
            {i === order && "✓"}
          </button>
        );
      })}
    </div>
  );
};

export default TimeLineContents;
