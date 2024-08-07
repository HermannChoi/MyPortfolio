"use client";
/** @jsxImportSource @emotion/react */

import { timelineStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import { projectsInfo } from "@/app/constants/timeLine/projectsInfo";
import { delayShowUpAni2 } from "@/app/styles/commonStyles/commonStyles";
import { scrollToTop } from "@/app/utils/scrollToTop";
import { css } from "@emotion/react";

const TimeLineContents = () => {
  const { order, setOrder } = useTimeLineStore();

  return (
    <nav css={[timelineStyles.line]}>
      <div css={timelineStyles.progressBar(order, projectsInfo.length)} />
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
              delayShowUpAni2(i / 6 + 1.2),
            ]}
          >
            {i === order ? "✓" : i + 1}
            {(i === 8 || i === 9 || i === 10) && (
              <p
                css={[
                  css`
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    line-height: 20px;
                    border: 1px solid #ffff00;
                    border-radius: 3px;
                    background-color: #ffff0030;
                    pointer-events: none;
                  `,
                ]}
              >
                추천
              </p>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default TimeLineContents;
