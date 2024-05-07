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
import Header from "./components/firstPageComponents/Header";
import TechStackSpace from "./components/firstPageComponents/TechStackSpace";

export default function Home() {
  const [cookies] = useCookies(["name"]);

  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [blackPage, setBlackPage] = useState(true);

  const { isFirstLogin, setIsFirstLogin } = useFirstPageCoverStore();

  useEffect(() => {
    if (cookies.name) {
      setIsFirstLogin(true);
    }
    setTimeout(() => {
      setBlackPage(false);
    }, 800);
  }, []);

  return (
    <div css={firstPageStyles.page(isProfileClicked)}>
      {blackPage && <BlackPage />}
      {!isFirstLogin && <FirstPageCover />}
      <Header />
      <TypeItSpace />
      <ProfileSpace setIsProfileClicked={setIsProfileClicked} />
      <BlogSpace />
      <TechStackSpace />
    </div>
  );
}
