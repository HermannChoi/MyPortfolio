import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import image1 from "@/app/assets/projectImages/zac/image1.png";
import image2 from "@/app/assets/projectImages/zac/image2.png";
import image3 from "@/app/assets/projectImages/zac/image3.png";
import image4 from "@/app/assets/projectImages/zac/image4.png";

export const zacFirstInfo: FirstInfoType = {
  src: image1,
  title: "ZAC",
  subtitle: "ZOOM 회의 출석체크 서비스",
  period: "2023.12.17 ~ 2023.01.2 (6일)",
  personnel: "4명 (Front-End 2명, Back-End 2명)",
  responsibility:
    "Front-End (전체적인 UI/UX Design, api통신, 다크/라이트 모드)",
  language: ["JavaScript", "HTML", "CSS"],
  framework: ["React"],
  etc: ["Slack", "GitHub"],
};

export const zacInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "다크/라이트 모드",
    description:
      "body태그에 data-theme이라는 옵션을 추가해서 dark 또는 light라는 값을 주고 이에 따라 모드가 변하게 구현하였습니다. 함수는 간단하게 값을 조건으로 토글방식으로 변하게 구현했습니다.",
  },
  {
    image: image3,
    title: "출결상태 버튼 API",
    description:
      "버튼을 클릭하면 api통신이 실행되고 이 데이터를 react-table 라이브러리를 사용해서 표에 담기게 구현하였습니다. 동시에 버튼 밑에 출석버튼을 클릭한 시간도 나오게 구현하였습니다.",
  },
  {
    image: image4,
    title: "UI/UX를 위해",
    description:
      "구름톤 트레이닝에 맞춰서 숫자로 상태가 나와 밑에 다른 참여 유저들도 알아볼 수 있게 숫자가 뜻하는 의미를 적어서 UX를 높이도록 구현했습니다.",
  },
];

export const zacFooter: FooterType = {
  limit:
    "프로젝트 자체의 한계점 : 서비스 전체의 면에서 api의 권한이 zoom 회의의 관리자만 실행할 수 있어서 모든 유저가 사용하기에는 어려움이 있다는 한계가 있었습니다.",
  takeaway:
    "다크/라이트 모드 구현하는 방법을 터득했고, 백엔드 팀원이 만든 api로 통신을 처음 시도해보았다.",
  output: "• 구름 풀스택 3회차 2차 스터디 회고 1등에 기여",
  links: [
    {
      href: "https://github.com/zoom-project-frontend/zoom-project-frontend_CK",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=qn9zgNyaDYA&list=PL0QzwpZdSZP-nGowtMLT4Hkiqb0M_pOFg&index=2&pp=gAQBiAQB",
      src: YouTube,
      name: "YouTube",
    },
  ],
};
