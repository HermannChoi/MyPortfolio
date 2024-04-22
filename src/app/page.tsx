"use client";
/** @jsxImportSource @emotion/react */

import FirstPageCover from "./components/firstPageComponents/FirstPageCover";
import {
  flexCenterX2,
  widthHeightVhFull,
} from "./styles/commonStyles/commonStyles";

export default function Home() {
  return (
    <div css={[widthHeightVhFull, flexCenterX2]}>
      <FirstPageCover />
    </div>
  );
}
