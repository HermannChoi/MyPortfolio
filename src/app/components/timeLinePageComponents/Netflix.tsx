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
import { netflixInfo } from "@/app/constants/projectInfos/netflix";

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
            <h2>Netflix 사이트 만들기</h2>
            <p
              css={[`margin-bottom: 30px; font-size: 1.1em; font-weight: 500;`]}
            >
              HTML/CSS를 이용해 Netflix화면 구현하기
            </p>
            <p>
              기술 스택 : HTML, CSS <br />
              개발 기간 : 2023.10.18 ~ 2023.10.20
            </p>
            <p>
              구름톤 첫번째 과제로 HTML과 CSS만을 이용해 넷플릭스 첫화면을
              구현해 보았습니다.
            </p>
          </article>
        </div>
      </div>
      {netflixInfo.map((netflix, i) => {
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
                <h3>{netflix.title}</h3>
                <p>{netflix.explanation}</p>
              </article>
            </div>
          </div>
        );
      })}
      <div css={[projectSection.outline, delayShowUpAni(0.2)]}>
        <picture css={projectSection.picture}></picture>
        <div css={projectSection.articleContainer}>
          <article css={projectSection.article}>
            <h3>배운 점</h3>
            <p>
              해당 프로젝트에서 CSS의 기본적인 스타일링 방법과 flex를 이용한
              정렬방법을 터득했습니다.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
