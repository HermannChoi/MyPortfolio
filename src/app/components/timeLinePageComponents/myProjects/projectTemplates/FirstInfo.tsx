"use client";
/** @jsxImportSource @emotion/react */

import { delayShowUpAni } from "@/app/styles/commonStyles/commonStyles";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import Image from "next/image";

interface FirstInfo {
  info: FirstInfoType;
}

const FirstInfo: React.FC<FirstInfo> = ({ info }) => {
  return (
    <div css={[projectSection.outline, delayShowUpAni(0)]}>
      <picture css={projectSection.picture}>
        <Image src={info.src} alt="자료 사진" css={projectSection.image} />
      </picture>
      <div css={projectSection.articleContainer}>
        <article css={projectSection.article}>
          <h2>{info.title}</h2>
          <p css={[`font-size: 1.1em; font-weight: 600;`]}>{info.subtitle}</p>
          <p>
            개발 기간 : {info.period}
            <br />
            개발 인원 : {info.personnel} <br />
            {info.responsibility && `담당 역할 : ${info.responsibility}`}
          </p>

          <p>
            <span css={[`font-size: 1.1em; font-weight: 500;`]}>개발 환경</span>
            <br />
            언어 : {info.language} <br />
            프레임워크 : {info.framework} <br />
            상태 라이브러리 : {info.stateLibrary} <br />
            {info.server && `서버 : ${info.server}`}
            <br />
            {info.db && `서버 : ${info.db}`}
            <br />
            ETC : {info.etc}
          </p>
          <p>{info.description}</p>
        </article>
      </div>
    </div>
  );
};

export default FirstInfo;
