"use client";
/** @jsxImportSource @emotion/react */

import { techStackStyles } from "@/app/styles/firstPageStyles/techStackStyles";
import { useState } from "react";
import { techStacks } from "@/app/constants/techStack/techStack";

const TechStackSpace = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section css={techStackStyles.section}>
      <button
        css={techStackStyles.mainButton}
        onClick={() => setIsClicked(!isClicked)}
      >
        TECH STACKS
        <div css={techStackStyles.arrow(isClicked)} />
      </button>
      <div css={techStackStyles.techStackSpace(isClicked)}>
        {techStacks.map((tech, i) => (
          <div key={i} css={techStackStyles.eachSpace}>
            <div css={techStackStyles.title}>{tech.title}</div>
            <div css={techStackStyles.contentSpace}>
              {techStacks[i].contents.map((stack, i) => (
                <p key={i} css={techStackStyles.content}>
                  {stack}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSpace;
