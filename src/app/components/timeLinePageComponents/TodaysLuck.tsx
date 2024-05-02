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
import { todaysLuckInfo } from "@/app/constants/projectInfos/todaysLuck";

const TodaysLuck = () => {
  const images = [TL2, TL3, TL4];

  return (
    <div css={[flexColumnCenter, `width: 100%;`]}>
      <div css={[projectSection.outline, delayShowUpAni(0)]}>
        <picture css={projectSection.picture}>
          <Image
            src={TL1}
            alt="넷플릭스 프로젝트 사진"
            css={projectSection.image}
          />
        </picture>
        <div css={projectSection.articleContainer}>
          <article css={projectSection.article}>
            <h2>오늘의 운세</h2>
            <p
              css={[`margin-bottom: 30px; font-size: 1.1em; font-weight: 500;`]}
            >
              일일 랜덤 운세 서비스
            </p>
            <p>
              개발 기간 : 2023.11.29 ~ 2023.12.04 (6일) <br />
              플랫폼 : Web <br />
              개발 인원 : 3명 (Front-End 2명, Back-End 1명) <br />
              담당 역할 : Front-End (UI/UX Design 및 전체적인 페이지 구성,
              애니메이션4)
            </p>
            <p>
              오늘의 운세 서비스는 프로그래밍을 배운지 얼마 안 되었을 때 만든 팀
              프로젝트입니다. React와 간단한 HTML/CSS로 구현되어 사용자의 눈을
              즐겁게 만듦 및 그날의 운세와 인용구를 chat-GPT의 api를 통해서
              띄워주도록 만들었습니다.
            </p>
          </article>
        </div>
      </div>
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
    </div>
  );
};

export default TodaysLuck;
