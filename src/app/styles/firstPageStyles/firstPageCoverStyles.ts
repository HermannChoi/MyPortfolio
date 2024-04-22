import { css } from "@emotion/react";
import { flexColumnCenterX2 } from "../commonStyles/commonStyles";

export const formStyles = {
  form: (isSubmiited: boolean) => {
    return [
      flexColumnCenterX2,
      css`
        ${isSubmiited && `display: none;`}
        width: 20vw;
        height: 5rem;
        border: 5px solid #a2ffe3;
        border-radius: 20px;
        background-color: black;
        color: white;
        box-shadow: 0 0 0 100vw black;
        overflow: hidden;
        z-index: 100;
        transition: 1s;
      `,
    ];
  },
  text: css``,
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
    transition: 0.5s ease-out;
    &:focus {
      width: 15vw;
      border: 3px solid #c8ffef;
      background-color: black !important;
      box-shadow: 0 0 10px white;
    }
  `,
};
