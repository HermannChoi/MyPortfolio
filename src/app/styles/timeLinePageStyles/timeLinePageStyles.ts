import { css } from "@emotion/react";
import {
  flexColumnCenter,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import {
  fadeIn2,
  floating,
  leftToRight,
  widthZeroToFull,
} from "../commonStyles/keyframes";

export const timelinePageStyles = {
  page: [flexColumnCenter, widthHeightFull],
  title: [
    css`
      animation: ${fadeIn2} 1s;
    `,
  ],
  guide: [
    css`
      font-size: 1.3em;
      font-weight: 500;
      opacity: 0;
      animation: ${fadeIn2} 1s 0.3s forwards,
        ${floating} 1s 1.3s alternate infinite linear;
    `,
  ],
};

export const timelineStyles = {
  line: [
    css`
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 3px;
      background-color: #ffffff;
      opacity: 0;
      animation: ${widthZeroToFull} 0.7s 1s linear forwards;
    `,
  ],
  light: [
    css`
      position: absolute;
      width: 20%;
      height: 100%;
      background-color: #a2ffe3;
      animation: ${leftToRight} 2s infinite;
    `,
  ],
  round: (color: string, name: string, date: string) => {
    return [
      css`
        position: relative;
        width: 30px;
        height: 30px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        background-color: ${color};
        transition: 0.2s;
        &:hover {
          transform: scale(1.1);
        }
        &::before {
          content: "${date}";
          position: absolute;
          bottom: -100%;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          color: gray;
        }
        &:hover::after {
          content: "${name}";
          position: absolute;
          bottom: -200%;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          font-size: 1.5em;
          font-weight: bold;
          animation: ${fadeIn2} 0.5s;
        }
      `,
    ];
  },
  round2: (color: string, name: string, date: string) => {
    return [
      css`
        position: relative;
        width: 15px;
        height: 15px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        background-color: #ffffff;
        transition: 0.2s;
        &:hover {
          width: 30px;
          height: 30px;
          background-color: ${color};
        }
        &::before {
          content: "${date}";
          position: absolute;
          bottom: -150%;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          color: gray;
        }
        &:hover::after {
          content: "${name}";
          position: absolute;
          bottom: -250%;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          font-size: 1.5em;
          font-weight: bold;
          animation: ${fadeIn2} 0.5s;
        }
      `,
    ];
  },
};
