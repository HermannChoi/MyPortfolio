"use client";
/** @jsxImportSource @emotion/react */

import { widthHeightVhFull } from "@/app/styles/commonStyles/commonStyles";
import { fadeOut2 } from "@/app/styles/commonStyles/keyframes";
import { css } from "@emotion/react";

const BlackPage = () => {
  return (
    <div
      css={[
        widthHeightVhFull,
        css`
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          z-index: 1001;
          animation: ${fadeOut2} 0.8s forwards;
        `,
      ]}
    ></div>
  );
};

export default BlackPage;
