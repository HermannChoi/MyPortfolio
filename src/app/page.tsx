/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import BlogSpace from "./components/firstPageComponents/BlogSpace";
import FirstPageCover from "./components/firstPageComponents/FirstPageCover";
import ProfileSpace from "./components/firstPageComponents/ProfileSpace";
import TypeItSpace from "./components/firstPageComponents/TypeItSpace";
import { firstPageStyles } from "./styles/firstPageStyles/firstPageStyles";
import { useFirstPageCoverStore } from "./stores/firstPageCoverStores/useFirstPageCoverStore";
import { useCookies } from "react-cookie";
import BlackPage from "./components/firstPageComponents/BlackPage";

export default function Home() {
  const [cookies, , removeCookie] = useCookies(["name"]);

  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const { isFirstLogin, setIsFirstLogin } = useFirstPageCoverStore();

  const handleClickLogout = () => {
    removeCookie("name");
    window.location.reload();
  };

  useEffect(() => {
    if (cookies.name) {
      setIsFirstLogin(true);
    }
  }, []);

  return (
    <div css={firstPageStyles.page(isProfileClicked)}>
      <BlackPage />
      {!isFirstLogin && <FirstPageCover />}
      <button
        css={firstPageStyles.logoutBtn}
        onClick={() => handleClickLogout()}
      >
        로그아웃
      </button>
      <TypeItSpace />
      <ProfileSpace setIsProfileClicked={setIsProfileClicked} />
      <BlogSpace />
    </div>
  );
}
