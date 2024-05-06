"use client";
/** @jsxImportSource @emotion/react */

import {
  firstPageCoverStyle,
  formStyles,
  wallStyles,
  welcomeMessage,
} from "@/app/styles/firstPageStyles/firstPageCoverStyles";
import { useFirstPageCoverStore } from "@/app/stores/firstPageCoverStores/useFirstPageCoverStore";
import { useState } from "react";
import { useCookies } from "react-cookie";

const FirstPageCover = () => {
  const [, setCookie] = useCookies(["name"]);

  const [message, setMessage] = useState("입장 조건");
  const [userName, setUserName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setIsFirstLogin } = useFirstPageCoverStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === "") {
      return setMessage("이름을 입력해주세요");
    }
    setMessage("성공 ✓");
    setIsSubmitted(true);
    console.log(userName);
    setCookie("name", userName);
    setTimeout(() => {
      setIsFirstLogin(true);
    }, 7500);
  };

  return (
    <div css={[firstPageCoverStyle(isSubmitted)]}>
      <form onSubmit={handleSubmit} css={[formStyles.form(isSubmitted)]}>
        <p css={[formStyles.text(message)]}>{message}</p>
        <input
          autoFocus
          type="text"
          placeholder="이름 입력"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          css={[formStyles.input]}
        />
      </form>
      <div css={wallStyles.wall}>
        <div css={[wallStyles.outerCircleOutline(isSubmitted)]}></div>
        <div css={[wallStyles.leftOuterCircle(isSubmitted)]}></div>
        <div css={[wallStyles.rightOuterCircle(isSubmitted)]}></div>
        <div css={[wallStyles.innerCircleOutline(isSubmitted)]}></div>
        <div css={[wallStyles.leftInnerCircle(isSubmitted)]}></div>
        <div css={[wallStyles.rightInnerCircle(isSubmitted)]}></div>
        <div css={[wallStyles.leftWall(isSubmitted)]}></div>
        <div css={[wallStyles.rightWall(isSubmitted)]}></div>
      </div>
      <div css={[welcomeMessage]}>{userName}님 환영합니다.</div>
    </div>
  );
};

export default FirstPageCover;
