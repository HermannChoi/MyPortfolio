"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styles/commonStyles/commonStyles";
import { formStyles } from "@/app/styles/firstPageStyles/firstPageCoverStyles";
import { useFirstPageCoverStore } from "@/app/stores/firstPageCoverStores/useFirstPageCoverStore";
import { useState } from "react";

const FirstPageCover = () => {
  const [message, setMessage] = useState("입장 조건");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { userName, setUserName } = useFirstPageCoverStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === "") {
      return setMessage("이름을 입력해주세요");
    }
    setMessage("성공 ✓");
    setIsSubmitted(true);
  };

  return (
    <div css={[widthHeightFull, flexCenterX2]}>
      <form onSubmit={handleSubmit} css={[formStyles.form(isSubmitted)]}>
        <p css={[formStyles.text]}>{message}</p>
        <input
          type="text"
          placeholder="이름 입력"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          css={[formStyles.input]}
        />
      </form>
    </div>
  );
};

export default FirstPageCover;
