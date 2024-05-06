/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import TimeLineContents from "@/app/components/timeLinePageComponents/TimeLineBar";
import { timelinePageStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import { widthHeightFull } from "@/app/styles/commonStyles/commonStyles";
import { useEffect } from "react";
import Netflix from "@/app/components/timeLinePageComponents/myProjects/Netflix";
import TodaysLuck from "@/app/components/timeLinePageComponents/myProjects/TodaysLuck";
import { scrollToTop } from "@/app/utils/scrollToTop";
import Link from "next/link";
import Header from "@/app/components/firstPageComponents/Header";
import GithubFinder from "@/app/components/timeLinePageComponents/myProjects/GithubFinder";
import CpkNote from "@/app/components/timeLinePageComponents/myProjects/CpkNote";
import Zac from "@/app/components/timeLinePageComponents/myProjects/Zac";
import EarthIdeN from "@/app/components/timeLinePageComponents/myProjects/EarthIdeN";
import Image from "next/image";
import Arrow from "@/app/assets/svg/arrow.svg";

const TimeLine = () => {
  const { order, setOrder } = useTimeLineStore();

  useEffect(() => {
    setOrder(null);
  }, []);

  return (
    <div css={[timelinePageStyles.main(order)]}>
      <Link href={"/"} css={timelinePageStyles.backBtn}>
        <Image src={Arrow} alt="arrow" priority={true} />
      </Link>
      <Header />
      <h1 css={timelinePageStyles.title}>Time Line of My Projects</h1>
      <p css={[timelinePageStyles.guide(order)]}>
        원들을 클릭하여 프로젝트를 보세요!
      </p>
      <header css={timelinePageStyles.header}>
        <TimeLineContents />
      </header>
      <main css={widthHeightFull}>
        {order === 0 ? (
          <Netflix />
        ) : order === 1 ? (
          <></>
        ) : order === 2 ? (
          <GithubFinder />
        ) : order === 3 ? (
          <></>
        ) : order === 4 ? (
          <></>
        ) : order === 5 ? (
          <TodaysLuck />
        ) : order === 6 ? (
          <CpkNote />
        ) : order === 7 ? (
          <Zac />
        ) : order === 8 ? (
          <EarthIdeN />
        ) : (
          <></>
        )}
      </main>
      {order !== null && (
        <button
          css={timelinePageStyles.scrollBtn}
          onClick={() => scrollToTop(0)}
        >
          맨 위로
        </button>
      )}
    </div>
  );
};

export default TimeLine;
