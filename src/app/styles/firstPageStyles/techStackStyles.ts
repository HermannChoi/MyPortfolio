import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenter,
} from "../commonStyles/commonStyles";
import { height200ToZero, heightZeroTo200 } from "../commonStyles/keyframes";

export const techStackStyles = {
  section: [
    flexColumnCenter,
    css`
      row-gap: 5px;
      width: 300px;
    `,
  ],
  mainButton: [
    css`
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 10px;
      border: 1px solid ${commonColors.representative};
      border-radius: 5px;
      background-color: ${commonColors.representative}60;
      transition: 0.2s;
      &:hover {
        background-color: ${commonColors.representative}80;
      }
    `,
  ],
  arrow: (isClicked: boolean) => {
    return [
      css`
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 16px;
          transform: rotate(${isClicked ? -130 : -50}deg);
          transform-origin: top;
          width: 2px;
          height: 9px;
          border-radius: 0 0 1px 1px;
          background-color: #ffffff;
          transition: 0.3s;
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 15px;
          transform: rotate(${isClicked ? 130 : 50}deg);
          transform-origin: top;
          width: 2px;
          height: 9px;
          border-radius: 0 0 1px 1px;
          background-color: #ffffff;
          transition: 0.3s;
        }
      `,
    ];
  },
  techStackSpace: (isClicked: boolean) => {
    return [
      flexColumnCenter,
      css`
        row-gap: 5px;
        width: 300px;
        height: 0px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: ${commonColors.representative}40;
        overflow-y: auto;
        animation: ${isClicked ? heightZeroTo200 : height200ToZero} 0.4s
          forwards;
      `,
    ];
  },
  eachSpace: [
    css`
      width: 100%;
      height: max-content;
    `,
  ],
  title: [
    css`
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding-left: 10px;
      background-color: ${commonColors.representative}40;
      font-weight: bold;
    `,
  ],
  contentSpace: [
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      padding: 5px;
    `,
  ],
  content: [
    flexCenterX2,
    css`
      width: fit-content;
      padding: 0px 7px;
      border-radius: 100px;
      background-color: ${commonColors.representative}60;
      font-size: 0.8em;
    `,
  ],
};
