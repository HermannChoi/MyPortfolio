"use client";
/** @jsxImportSource @emotion/react */

import { delayShowUpAni } from "@/app/styles/commonStyles/commonStyles";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import { MiddleInfoType } from "@/app/types/projectComponentTypes/middleInfo";
import Image from "next/image";

const MiddleInfo: React.FC<MiddleInfoType> = ({ info }) => {
  return (
    <>
      {info.map((info, i) => {
        return (
          <div
            key={i}
            css={[projectSection.outline, delayShowUpAni(0.2 + 0.2 * i)]}
          >
            <picture css={projectSection.picture}>
              <Image
                src={info.image}
                alt="자료 사진"
                css={projectSection.image}
              />
            </picture>
            <div css={projectSection.articleContainer}>
              <article css={projectSection.article}>
                <h3>{info.title}</h3>
                <h4>{info.subtitle}</h4>
                <pre css={[`white-space: break-spaces`]}>
                  {info.description}
                </pre>
                <h4>{info.subtitle2}</h4>
                <pre css={[`white-space: break-spaces`]}>
                  {info.description2}
                </pre>
              </article>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MiddleInfo;
