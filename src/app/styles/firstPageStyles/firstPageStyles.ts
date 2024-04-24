import { css } from "@emotion/react";
import {
  absoluteCenterX2,
  flexCenterX2,
  flexColumnCenterX2,
  whiteSpaceNoWrap,
  widthHeightFull,
  widthHeightVhFull,
} from "../commonStyles/commonStyles";
import { fadeIn, showUp } from "../commonStyles/keyframes";

export const firstPageStyles = {
  page: (isProfileClicked: boolean) => {
    return [
      widthHeightVhFull,
      flexColumnCenterX2,
      css`
        row-gap: 50px;
        transition: 0.5s;
        ${isProfileClicked && `transform: translateY(-100vh)`}
      `,
    ];
  },
  imageContainer: (isClicked: boolean) => {
    return [
      css`
        position: relative;
        width: 250px;
        height: 250px;
        border: none;
        border-radius: 40%;
        overflow: hidden;
        transition: 0.2s;
        &:hover {
          border-radius: 50%;
          ${isClicked
            ? "box-shadow: 0 0 20px lime"
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
          animation: ${fadeIn} 0.5s;
          z-index: 1;
        }
      `,
    ];
  },
  image: [widthHeightFull],
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
  container: [
    flexCenterX2,
    css`
      width: 50px;
      height: 50px;
      border: 2px solid white;
      border-radius: 50%;
      transition: 0.2s;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 20px white;
      }
    `,
  ],
  image: css`
    width: 70%;
    height: 70%;
    transition: 0.2s;
    &:hover {
      width: 80%;
      height: 80%;
    }
  `,
};
