/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useCookies } from "react-cookie";
import { firstPageStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import { useEffect, useState } from "react";
import { useFirstPageCoverStore } from "@/app/stores/firstPageCoverStores/useFirstPageCoverStore";

const Header = () => {
  const [cookies, , removeCookie] = useCookies(["name"]);

  const { userName, setUserName } = useFirstPageCoverStore();

  const handleClickLogout = () => {
    removeCookie("name", { path: "/" });
    window.location.reload();
  };

  useEffect(() => {
    setUserName(cookies.name);
  }, [userName]);

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
