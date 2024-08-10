import { css } from "@emotion/react";
import {
  absoluteCenterX2,
  commonColors,
  flexCenterX2,
  flexColumnCenterX2,
  whiteSpaceNoWrap,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import { fadeIn } from "../commonStyles/keyframes";

export const firstPageStyles = {
  page: (isProfileClicked: boolean) => {
    return [
      widthHeightFull,
      flexColumnCenterX2,
      css`
        row-gap: 25px;
        min-height: 100vh;
        // padding-top: 50px;
        background: linear-gradient(0deg, black, #292929);
        transition: 0.5s;
        ${isProfileClicked && `transform: translateY(-120vh)`}
      `,
    ];
  },
  name: [
    css`
      position: absolute;
      top: 10px;
      right: 100px;
      line-height: 30px;
    `,
  ],
  logoutBtn: [
    css`
      position: absolute;
      top: 10px;
      right: 10px;
      width: 80px;
      height: 30px;
      border: 1px solid #ffffff;
      border-radius: 5px;
      background-color: transparent;
      &:hover {
        border-color: ${commonColors.representative};
        color: ${commonColors.representative};
      }
    `,
  ],
  imageContainer: (isClicked: boolean) => {
    return [
      css`
        position: relative;
        width: 300px;
        height: 300px;
        border: 1px solid gray;
        border-radius: ${isClicked ? 50 : 10}%;
        overflow: hidden;
        transition: 0.2s;
        &:hover {
          border-radius: 50%;
          ${isClicked
            ? `box-shadow: 0 0 40px ` + commonColors.representative + `;`
            : "box-shadow: 0 0 20px white"};
        }
        &:hover::before {
          ${isClicked
            ? `content: "가봅시다!!";`
            : `content: "클릭해서 제가 만든 프로젝트들을 보세요!";`}
          ${absoluteCenterX2}
          ${whiteSpaceNoWrap}
          ${flexCenterX2}
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #00000080;
          ${isClicked && `font-size: 1.5em;`}
          animation: ${fadeIn} 0.5s;
          z-index: 1;
        }
      `,
    ];
  },
  image: (isClicked: boolean) => {
    return [
      widthHeightFull,
      css`
        transform: scale(${isClicked ? 2 : 1});
        transition: 0.5s;
        object-fit: cover;
        user-select: none;
      `,
    ];
  },
};

export const blogStyles = {
  whole: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
    `,
  ],
  container: (name: string) => {
    return [
      flexCenterX2,
      css`
        width: 40px;
        height: 40px;
        border: 2px solid white;
        border-radius: 30%;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          border-color: ${commonColors.representative};
          box-shadow: 0 0 10px white;
        }
        &:hover::before {
          content: "${name}";
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8em;
        }
      `,
    ];
  },
  image: css`
    width: 70%;
    height: 70%;
    transition: 0.2s;
  `,
};
