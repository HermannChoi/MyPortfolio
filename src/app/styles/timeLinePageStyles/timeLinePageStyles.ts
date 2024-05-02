import { css } from "@emotion/react";
import {
  flexCenterX2,
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
  header: [
    [
      flexCenterX2,
      css`
        position: sticky;
        top: 0px;
        width: 100%;
        height: 70px;
        background-color: #00000080;
        z-index: 100;
      `,
    ],
  ],
  main: (order: null | number) => {
    return [
      flexColumnCenter,
      widthHeightFull,
      css`
        row-gap: ${order === null ? "100px" : "40px"};
        padding: 50px;
        transition: row-gap 1s;
      `,
    ];
  },
  title: [
    css`
      animation: ${fadeIn2} 1s;
    `,
  ],
  guide: (order: null | number) => {
    return [
      css`
        font-size: ${order === null ? "1.3em" : "0em"};
        font-weight: 500;
        opacity: 0;
        transition: 0.5s;
        animation: ${fadeIn2} 1s 0.3s forwards,
          ${floating} 1s 1.3s alternate infinite linear;
      `,
    ];
  },
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
  selectedOne: [
    css`
      border: 2px solid yellow !important;
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
          padding: 0px 20px;
          border: 1px solid ${color};
          border-radius: 10px;
          background-color: #000000;
          font-size: 1.3em;
          font-weight: bold;
          animation: ${fadeIn2} 0.5s;
        }
      `,
    ];
  },
};
