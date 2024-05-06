import { css } from "@emotion/react";
import {
  absoluteCenter,
  absoluteCenterX2,
  flexCenterX2,
  flexColumnCenterX2,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import {
  fadeOut,
  firstCoverFadeOut,
  moveLeft,
  moveRight,
  turnLeft,
  turnRight,
  xTo50vw,
  xToMinus50vw,
} from "../commonStyles/keyframes";

export const firstPageCoverStyle = (isSubmiited: boolean) => {
  return [
    widthHeightFull,
    flexCenterX2,
    css`
      position: absolute;
      top: 0;
      left: 0;
      animation: ${isSubmiited && fadeOut} 2s 5.5s forwards;
      z-index: 1000;
    `,
  ];
};

export const formStyles = {
  form: (isSubmiited: boolean) => {
    return [
      flexColumnCenterX2,
      css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20vw;
        ${!isSubmiited && `min-width: 200px;`}
        height: 5rem;
        border: 5px solid #a2ffe3;
        border-radius: 20px;
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 0 0 0 100vw black;
        overflow: hidden;
        z-index: 100;
        // transition: 1s;
        animation: ${isSubmiited && firstCoverFadeOut} 1.5s forwards;
      `,
    ];
  },
  text: (message: string) => {
    return [
      css`
        ${message === "성공 ✓" && `color: green;`}
      `,
    ];
  },
  input: css`
    width: 5vw;
    min-width: 80px;
    padding: 5px;
    border: 3px solid #a2ffe3;
    border-radius: 12px;
    margin-top: 10px;
    text-align: center !important;
    background-color: transparent !important;
    color: white;
    transition: 0.2s ease-out;
    &:focus {
      width: 15vw;
      border: 3px solid #c8ffef;
      background-color: black !important;
      box-shadow: 0 0 10px white;
    }
  `,
};

export const wallStyles = {
  wall: css`
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  `,
  leftWall: (isSubmiited: boolean) => {
    return [
      css`
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 50vw;
        height: 100vh;
        border-right: 10px solid #a8ffe6;
        background-color: #02040a;
        box-shadow: inset -3px 0px 15px black;
        animation: ${isSubmiited && xToMinus50vw} 2s 3.5s forwards;
      `,
    ];
  },
  rightWall: (isSubmiited: boolean) => {
    return [
      css`
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        width: 50vw;
        height: 100vh;
        border-left: 10px solid #cefff1;
        background-color: #02040a;
        box-shadow: inset 3px 0px 15px black;
        animation: ${isSubmiited && xTo50vw} 2s 3.5s forwards;
      `,
    ];
  },
  outerCircleOutline: (isSubmiited: boolean) => {
    return [
      absoluteCenterX2,
      css`
        width: 220px;
        height: 220px;
        border-radius: 50%;
        background-color: #92ffde;
        z-index: 20;
        animation: ${isSubmiited && turnLeft} 2s 1.5s forwards;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 5px;
          background-color: rgb(50, 50, 50);
        }
      `,
    ];
  },
  leftOuterCircle: (isSubmiited: boolean) => {
    return [
      absoluteCenter,
      css`
        transform: translate(-100%, -50%);
        width: 95px;
        height: 190px;
        border-radius: 100px 0 0 100px;
        background-color: #009769;
        box-shadow: 0 0 10px white;
        z-index: 20;
        animation: ${isSubmiited && moveLeft} 2s 3.5s forwards;
      `,
    ];
  },
  rightOuterCircle: (isSubmiited: boolean) => {
    return [
      css`
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(100%, -50%);
        width: 95px;
        height: 190px;
        border-radius: 0 100px 100px 0;
        background-color: #009769;
        box-shadow: 0 0 10px white;
        z-index: 20;
        animation: ${isSubmiited && moveRight} 2s 3.5s forwards;
      `,
    ];
  },
  innerCircleOutline: (isSubmiited: boolean) => {
    return [
      absoluteCenterX2,
      css`
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background-color: #92ffde;
        z-index: 30;
        animation: ${isSubmiited && turnRight} 2s 1s forwards;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 100%;
          background-color: rgb(50, 50, 50);
        }
      `,
    ];
  },
  leftInnerCircle: (isSubmiited: boolean) => {
    return [
      absoluteCenter,
      css`
        transform: translate(-100%, -50%);
        width: 65px;
        height: 130px;
        border-radius: 100px 0 0 100px;
        background-color: #00ffb2;
        box-shadow: 0 0 10px white;
        animation: ${isSubmiited && moveLeft} 2s 3.5s forwards;
        z-index: 30;
      `,
    ];
  },
  rightInnerCircle: (isSubmiited: boolean) => {
    return [
      css`
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(100%, -50%);
        width: 65px;
        height: 130px;
        border-radius: 0 100px 100px 0;
        background-color: #00ffb2;
        box-shadow: 0 0 10px white;
        animation: ${isSubmiited && moveRight} 2s 3.5s forwards;
        z-index: 30;
      `,
    ];
  },
};

export const welcomeMessage = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  color: linear-gradient(to bottom, black, gray);
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 0px 20px 15px rgb(40, 40, 40);
  z-index: 1;
`;
