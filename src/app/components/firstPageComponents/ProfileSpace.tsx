"use client";
/** @jsxImportSource @emotion/react */

import { firstPageStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import Image from "next/image";
import Profile from "@/app/assets/profile/IMG_1530.jpg";

const ProfileSpace = () => {
  return (
    <div css={[firstPageStyles.imageContainer]}>
      <Image src={Profile} alt="프로필 이미지" css={firstPageStyles.image} />
    </div>
  );
};

export default ProfileSpace;
