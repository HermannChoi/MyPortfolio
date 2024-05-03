"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import image1 from "@/app/assets/projectImages/netflix/netflix1.png";
import image2 from "@/app/assets/projectImages/netflix/netflix2.png";
import image3 from "@/app/assets/projectImages/netflix/netflix3.png";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import {
  delayShowUpAni,
  flexColumnCenter,
} from "@/app/styles/commonStyles/commonStyles";
import {
  netflixFirst,
  netflixFooter,
  netflixInfo,
} from "@/app/constants/projectInfos/netflix";
import Footer from "../projectTemplates/Footer";

const Netflix = () => {
  const images = [image2, image3];
  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <div css={[projectSection.outline, delayShowUpAni(0)]}>
        <picture css={projectSection.picture}>
          <Image
            src={image1}
            alt="넷플릭스 프로젝트 사진"
            css={projectSection.image}
          />
        </picture>
        <div css={projectSection.articleContainer}>
          <article css={projectSection.article}>
            <h2>{netflixFirst.name}</h2>
            <p
              css={[`margin-bottom: 30px; font-size: 1.1em; font-weight: 500;`]}
            >
              {netflixFirst.subtitle}
            </p>
            <p>
              {netflixFirst.techStack}
              <br />
              {netflixFirst.period}
            </p>
            <p>{netflixFirst.description}</p>
          </article>
        </div>
      </div>
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
