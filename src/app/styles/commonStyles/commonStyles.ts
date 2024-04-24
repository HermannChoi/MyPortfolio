import { css } from "@emotion/react";

export const flexCenterX2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const widthHeightFull = css`
  width: 100%;
  height: 100%;
`;

export const widthHeightVhFull = css`
  width: 100%;
  height: 100vh;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const flexColumnCenterX2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const absoluteCenterX2 = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
