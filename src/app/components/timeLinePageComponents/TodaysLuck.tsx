"use client";
/** @jsxImportSource @emotion/react */

import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import Image from "next/image";
import TL1 from "@/app/assets/projectImages/todaysLuck/image3.png";
import TL2 from "@/app/assets/projectImages/todaysLuck/image2.png";
import TL3 from "@/app/assets/projectImages/todaysLuck/image4.png";
import TL4 from "@/app/assets/projectImages/todaysLuck/image5.png";
import {
  delayShowUpAni,
  flexColumnCenter,
} from "@/app/styles/commonStyles/commonStyles";
import {
  TLFooter,
  todaysLuckFirstInfo,
  todaysLuckInfo,
} from "@/app/constants/projectInfos/todaysLuck";
import Footer from "../projectTemplates/Footer";
import FirstInfo from "../projectTemplates/FirstInfo";

const TodaysLuck = () => {
  const images = [TL2, TL3, TL4];

  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={todaysLuckFirstInfo} />
      {todaysLuckInfo.map((info, i) => {
        return (
          <div key={i} css={[projectSection.outline, delayShowUpAni(0.2)]}>
            <picture css={projectSection.picture}>
              <Image
                src={images[i]}
                alt="넷플릭스 프로젝트 사진"
                css={projectSection.image}
              />
            </picture>
            <div css={projectSection.articleContainer}>
              <article css={projectSection.article}>
                <h3>{info.title}</h3>
                <p>{info.explanation}</p>
              </article>
            </div>
          </div>
        );
      })}
      <Footer info={TLFooter} />
    </div>
  );
};

export default TodaysLuck;
