"use client";
/** @jsxImportSource @emotion/react */

import FirstPageCover from "./components/firstPageComponents/FirstPageCover";
import ProfileSpace from "./components/firstPageComponents/ProfileSpace";
import TypeItSpace from "./components/firstPageComponents/TypeItSpace";
import {
  flexColumnCenterX2,
  widthHeightVhFull,
} from "./styles/commonStyles/commonStyles";

export default function Home() {
  return (
    <div css={[widthHeightVhFull, flexColumnCenterX2]}>
      <FirstPageCover />
      <TypeItSpace />
      <ProfileSpace />
    </div>
  );
}
