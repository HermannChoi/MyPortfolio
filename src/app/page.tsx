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

export default function Home() {
  const [cookies] = useCookies(["name"]);

  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const { isFirstLogin, setIsFirstLogin } = useFirstPageCoverStore();

  useEffect(() => {
    if (cookies.name) {
      setIsFirstLogin(true);
    }
  }, []);

  return (
    <div css={firstPageStyles.page(isProfileClicked)}>
      <BlackPage />
      {!isFirstLogin && <FirstPageCover />}
      <Header />
      <TypeItSpace />
      <ProfileSpace setIsProfileClicked={setIsProfileClicked} />
      <BlogSpace />
    </div>
  );
}
