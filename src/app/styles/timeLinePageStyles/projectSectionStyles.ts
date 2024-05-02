import { css } from "@emotion/react";
import { flexColumnCenter } from "../commonStyles/commonStyles";

export const projectSection = {
  outline: [
    css`
      display: flex;
      gap: 10px;
      width: 100%;
      padding: 20px;
    `,
  ],
  picture: [
    flexColumnCenter,
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
      height: 100%;
    `,
  ],
  article: [
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 20px;
      width: 100%;
    `,
  ],
};
