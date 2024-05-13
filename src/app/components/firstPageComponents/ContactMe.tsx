"use client";
/** @jsxImportSource @emotion/react */

import { techStackStyles } from "@/app/styles/firstPageStyles/techStackStyles";
import React from "react";

const ContactMe = () => {
  return (
    <button
      onClick={() => (window.location.href = `mailto: hiyunseok347@gmail.com`)}
      css={[
        techStackStyles.mainButton,
        `width: 300px; height: 25px; justify-content: center;`,
      ]}
    >
      Contact Me
    </button>
  );
};

export default ContactMe;
