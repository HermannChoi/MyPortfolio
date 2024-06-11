"use client";
/** @jsxImportSource @emotion/react */

import {
  delayShowUpAni,
  flexColumnCenter,
} from "@/app/styles/commonStyles/commonStyles";
import { techStackStyles } from "@/app/styles/firstPageStyles/techStackStyles";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { css } from "@emotion/react";
import Image from "next/image";

interface FirstInfo {
  info: FirstInfoType;
}

const FirstInfo: React.FC<FirstInfo> = ({ info }) => {
  return (
    <div css={[projectSection.outline, delayShowUpAni(0)]}>
      <picture css={projectSection.picture}>
        <Image
          src={info.src}
          alt="자료 사진"
          css={projectSection.image}
          priority={true}
        />
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

          <div css={projectSection.stackSpace}>
            <span css={[`font-size: 1.1em; font-weight: 500;`]}>개발 환경</span>
            <br />
            <div css={projectSection.eachStackLine}>
              <span>언어 :</span>
              {info.language.map((lang, i) => {
                return (
                  <div key={i} css={techStackStyles.content}>
                    {lang}
                  </div>
                );
              })}
            </div>
            {info.framework && (
              <div css={projectSection.eachStackLine}>
                <span>프레임워크 :</span>
                {info.framework.map((fw, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {fw}
                    </div>
                  );
                })}
              </div>
            )}
            {info.stateLibrary && (
              <div css={projectSection.eachStackLine}>
                <span>상태 라이브러리 :</span>
                {info.stateLibrary.map((sl, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {sl}
                    </div>
                  );
                })}
              </div>
            )}
            {info.cicd && (
              <div css={projectSection.eachStackLine}>
                <span>CI/CD :</span>
                {info.cicd.map((cicd, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {cicd}
                    </div>
                  );
                })}
              </div>
            )}
            {info.server && (
              <div css={projectSection.eachStackLine}>
                <span>서버 :</span>
                {info.server.map((server, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {server}
                    </div>
                  );
                })}
              </div>
            )}
            {info.db && (
              <div css={projectSection.eachStackLine}>
                <span>DB :</span>
                {info.db.map((db, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {db}
                    </div>
                  );
                })}
              </div>
            )}
            {info.etc && (
              <div css={projectSection.eachStackLine}>
                <span>ETC :</span>
                {info.etc.map((etc, i) => {
                  return (
                    <div key={i} css={techStackStyles.content}>
                      {etc}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <p>{info.description}</p>
        </article>
      </div>
    </div>
  );
};

export default FirstInfo;
