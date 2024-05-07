/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useCookies } from "react-cookie";
import { firstPageStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const [cookies, , removeCookie] = useCookies(["name"]);
  const [userName, setUserName] = useState("");

  const handleClickLogout = () => {
    removeCookie("name");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    if (!cookies.name) {
      router.push("/");
    }
    setUserName(cookies.name);
  }, [cookies.name]);

  return (
    <>
      <p css={firstPageStyles.name}>{userName}님</p>
      <button
        css={firstPageStyles.logoutBtn}
        onClick={() => handleClickLogout()}
      >
        로그아웃
      </button>
    </>
  );
};

export default Header;
