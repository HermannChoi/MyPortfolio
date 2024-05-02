"use client";
/** @jsxImportSource @emotion/react */

import { useState } from "react";
import BlogSpace from "./components/firstPageComponents/BlogSpace";
import FirstPageCover from "./components/firstPageComponents/FirstPageCover";
import ProfileSpace from "./components/firstPageComponents/ProfileSpace";
import TypeItSpace from "./components/firstPageComponents/TypeItSpace";
import { firstPageStyles } from "./styles/firstPageStyles/firstPageStyles";
import { useFirstPageCoverStore } from "./stores/firstPageCoverStores/useFirstPageCoverStore";

export default function Home() {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const { isFirstLogin } = useFirstPageCoverStore();

  return (
    <div css={firstPageStyles.page(isProfileClicked)}>
      {!isFirstLogin && <FirstPageCover />}
      <TypeItSpace />
      <ProfileSpace setIsProfileClicked={setIsProfileClicked} />
      <BlogSpace />
    </div>
  );
}
