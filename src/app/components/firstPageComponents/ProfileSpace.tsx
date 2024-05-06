"use client";
/** @jsxImportSource @emotion/react */

import { firstPageStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import Image from "next/image";
import Profile from "@/app/assets/profile/IMG_1530.jpg";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileSpace {
  setIsProfileClicked: Dispatch<SetStateAction<boolean>>;
}

const ProfileSpace: React.FC<ProfileSpace> = ({ setIsProfileClicked }) => {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsProfileClicked(true);
    }, 500);
    setTimeout(() => {
      router.push("/pages/timeLine");
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => handleClick()}
        css={[firstPageStyles.imageContainer(isClicked)]}
      >
        <Image
          src={Profile}
          alt="프로필 이미지"
          css={firstPageStyles.image(isClicked)}
          priority={true}
        />
      </button>
      <p css={[`color: gray;`]}>사진을 클릭해 보세요!</p>
    </>
  );
};

export default ProfileSpace;
