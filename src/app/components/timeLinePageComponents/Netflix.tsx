"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import image2 from "@/app/assets/projectImages/netflix/netflix2.png";
import image3 from "@/app/assets/projectImages/netflix/netflix3.png";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import {
  delayShowUpAni,
  flexColumnCenter,
} from "@/app/styles/commonStyles/commonStyles";
import {
  netflixFirstInfo,
  netflixFooter,
  netflixInfo,
} from "@/app/constants/projectInfos/netflix";
import Footer from "../projectTemplates/Footer";
import FirstInfo from "../projectTemplates/FirstInfo";

const Netflix = () => {
  const images = [image2, image3];
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <FirstInfo info={netflixFirstInfo} />
      {netflixInfo.map((netflix, i) => {
        return (
          <div
            key={i}
            css={[projectSection.outline, delayShowUpAni(0.2 + 0.2 * i)]}
          >
            <picture css={projectSection.picture}>
              <Image
                src={images[i]}
                alt="넷플릭스 프로젝트 사진"
                css={projectSection.image}
              />
            </picture>
            <div css={projectSection.articleContainer}>
              <article css={projectSection.article}>
                <h3>{netflix.title}</h3>
                <p>{netflix.explanation}</p>
              </article>
            </div>
          </div>
        );
      })}
      <Footer info={netflixFooter} />
    </div>
  );
};

export default Netflix;
