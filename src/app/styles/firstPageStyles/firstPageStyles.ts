import { css } from "@emotion/react";

export const firstPageStyles = {
  imageContainer: [
    css`
      width: 250px;
      height: 250px;
      border-radius: 40%;
      overflow: hidden;
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        border-radius: 50%;
        box-shadow: 0 0 20px white;
      }
    `,
  ],
  image: [
    css`
      width: 100%;
      height: 100%;
      transition: 0.4s;
      &:hover {
        transform: scale(1.2);
      }
    `,
  ],
};
