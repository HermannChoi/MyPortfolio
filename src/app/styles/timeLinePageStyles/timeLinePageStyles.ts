import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenter,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import {
  fadeIn2,
  fadeInForProjName,
  floating,
  widthZeroToFull,
} from "../commonStyles/keyframes";

export const timelinePageStyles = {
  header: [
    [
      flexCenterX2,
      css`
        position: sticky;
        top: 0px;
        width: 100%;
        height: 150px;
        background-color: #00000090;
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
  backBtn: [
    css`
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 40px;
      border: none;
      background-color: transparent;
      font-size: 2em;
      transition: 0.3s;
      &:hover {
        left: 15px;
        color: ${commonColors.representative};
      }
    `,
  ],
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
          ${floating} 1.3s 1.3s alternate infinite linear;
      `,
    ];
  },
  scrollBtn: [
    css`
      width: 100%;
      height: 30px;
      background-color: transparent;
      border: 1px solid gray;
      border-radius: 15px;
      transition: 0.2s;
      &:hover {
        height: 35px;
        border-color: ${commonColors.representative};
      }
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
      height: 5px;
      background-color: #ffffff;
      opacity: 0;
      animation: ${widthZeroToFull} 0.5s 0.6s linear forwards;
    `,
  ],
  selectedOne: (color: string) => {
    return [
      css`
        transform: scale(1.2);
        border-color: yellow !important;
        background-color: ${color} !important;
      `,
    ];
  },
  round: (color: string, name: string, date: string) => {
    return [
      css`
        position: relative;
        width: 0px;
        height: 0px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background-color: gray;
        overflow: hidden;
        transition: 0.2s;
        &:hover {
          transform: scale(1.2);
          background-color: ${color};
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
          bottom: -170%;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          padding: 0px 20px;
          border: 1px solid ${color};
          border-radius: 10px;
          background-color: #ffffffc7;
          color: black;
          font-size: 1.1em;
          font-weight: bold;
          animation: ${fadeInForProjName} 0.5s;
        }
      `,
    ];
  },
};
