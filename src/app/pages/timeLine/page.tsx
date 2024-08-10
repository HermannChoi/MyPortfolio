/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import TimeLineContents from "@/app/components/timeLinePageComponents/TimeLineBar";
import { timelinePageStyles } from "@/app/styles/timeLinePageStyles/timeLinePageStyles";
import { useTimeLineStore } from "@/app/stores/timeLinePageStores/useTimeLineStore";
import {
  delayShowUpAni,
  widthHeightFull,
} from "@/app/styles/commonStyles/commonStyles";
import { useEffect, useState } from "react";
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
import Palette from "@/app/components/timeLinePageComponents/myProjects/Palette";
import ToDoWithJS from "@/app/components/timeLinePageComponents/myProjects/ToDoWithJS";
import BudgetCalculator from "@/app/components/timeLinePageComponents/myProjects/BudgetCalculator";
import ShoppingMall from "@/app/components/timeLinePageComponents/myProjects/ShoppingMall";
import MyPortfolio from "@/app/components/timeLinePageComponents/myProjects/MyPortfolio";

const TimeLine = () => {
  const { order, setOrder } = useTimeLineStore();

  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight + 25;
      let progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    setOrder(null);
  }, []);

  return (
    <div css={[timelinePageStyles.whole(order)]}>
      <Link href={"/"} css={timelinePageStyles.backBtn}>
        <Image src={Arrow} alt="arrow" priority={true} />
      </Link>
      {/* <Header /> */}
      {order !== null && (
        <div css={timelinePageStyles.progress_container}>
          <div css={timelinePageStyles.progress_bar(scrollProgress)}></div>
        </div>
      )}
      <h1 css={timelinePageStyles.title}>Time Line of My Projects</h1>
      <p css={[timelinePageStyles.guide(order)]}>
        원들을 클릭하여 프로젝트를 보세요!
      </p>
      <header css={timelinePageStyles.header}>
        <TimeLineContents />
      </header>
      <main css={[timelinePageStyles.main]}>
        {order === 0 ? (
          <Netflix />
        ) : order === 1 ? (
          <ToDoWithJS />
        ) : order === 2 ? (
          <GithubFinder />
        ) : order === 3 ? (
          <BudgetCalculator />
        ) : order === 4 ? (
          <ShoppingMall />
        ) : order === 5 ? (
          <TodaysLuck />
        ) : order === 6 ? (
          <CpkNote />
        ) : order === 7 ? (
          <Zac />
        ) : order === 8 ? (
          <EarthIdeN />
        ) : order === 9 ? (
          <Palette />
        ) : (
          order === 10 && <MyPortfolio />
        )}
      </main>
      <p css={delayShowUpAni(0.9)}>{`"시작은 미미하지만 그 끝은 창대하리"`}</p>
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
