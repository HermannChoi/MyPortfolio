import { css } from "@emotion/react";
import { flexCenterX2 } from "../commonStyles/commonStyles";

export const projectSection = {
  outline: [
    css`
      display: flex;
      gap: 10px;
      width: 100%;
      padding: 20px;
      overflow: hidden;

      @media (max-width: 1260px) {
        flex-direction: column;
        padding: 0;
      }
    `,
  ],
  picture: [
    flexCenterX2,
    css`
      flex: 1;
      row-gap: 20px;
      height: 100%;
    `,
  ],
  image: [
    css`
      width: 100%;
      height: auto;
      border-radius: 20px;
      background-color: gray;
      object-fit: cover;
    `,
  ],
  articleContainer: [
    css`
      flex: 1;
    `,
  ],
  article: [
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 20px;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    `,
  ],
  stackSpace: [
    css`
      display: flex;
      flex-direction: column;
      row-gap: 5px;
    `,
  ],
  eachStackLine: [
    css`
      display: flex;
      gap: 3px;
    `,
  ],
  lastContainer: [
    css`
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: 20px;
      width: 100%;
      padding: 20px;
    `,
  ],
  linkContainer: [
    flexCenterX2,
    css`
      gap: 10px;
      height: 100%;
    `,
  ],
  link: [
    css`
      padding: 3px;
      border: 2px solid #ffffff;
      border-radius: 40%;
    `,
  ],
};
