import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import FirstImage from "@/app/assets/projectImages/todaysLuck/image3.png";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import TL2 from "@/app/assets/projectImages/todaysLuck/image2.png";
import TL3 from "@/app/assets/projectImages/todaysLuck/image4.png";
import TL4 from "@/app/assets/projectImages/todaysLuck/image5.png";

export const todaysLuckFirstInfo: FirstInfoType = {
  src: FirstImage,
  title: "오늘의 운세",
  subtitle: "일일 랜덤 운세 서비스",
  period: "2023.11.29 ~ 2023.12.04 (6일)",
  personnel: "3명 (Front-End 2명, Back-End 1명)",
  responsibility:
    "Front-End (UI/UX Design 및 전체적인 페이지 구성, 애니메이션)",
  language: ["TypeScript", "HTML", "CSS(module)"],
  framework: ["React"],
  stateLibrary: ["Zustand"],
  etc: ["Figma", "Slack", "GitHub"],
};

export const todaysLuckInfo: MiddleContentsType[] = [
  {
    image: TL2,
    title: "메인 페이지",
    description:
      "처음 렌더링 될 때 카드가 돌고 멈추면서 원하는 카드를 고르라는 텍스트가 나옵니다. 이 카드를 클릭 시 카드가 좌우로 5장이 펼쳐지면서 원하는 카드 중 하나를 뽑을 수 있습니다.",
  },
  {
    image: TL3,
    title: "카드 선택 시",
    description:
      "카드 선택 시 고른 카드를 제외한 나머지 카드들이 사라지면서, 고른 카드는 뒤집혀 집니다.",
  },
  {
    image: TL4,
    title: "선택카드 페이지",
    description:
      "카드 선택 시 페이지가 라우팅 되어 /detail/1 ~ 5까지 이동되어 카드가 뒤집어지면서 3개의 다른 카드 문양 중 하나가 렌더링 되어 보여지고, 오른쪽 섹션에 긍정의 말과 랜덤의 명언이 나오며 사용자에게 띄워집니다. 그리고 헤더의 '오늘의 운세'를 클릭하면 다시 처음으로 돌아가게 구현하였습니다.",
  },
];

export const TLFooter: FooterType = {
  limit:
    "당시에 애니메이션과 transform에 대한 이해도가 완벽하지 않았기 때문에 카드가 뒤집어 지기 전에 왼쪽 으로 먼저 이동을 해야 하지만, 이것을 구현하지 못했다. 해결방법으로 카드가 옆면으로 width가 0이 될 때 순간적으로 왼쪽으로 보내서 눈속임으로 해결하였다. ",
  takeaway: "flex에 대한 이해 및 css스킬을 고도화시킬 수 있는 시간이었습니다.",
  output: "• 구름 풀스택 3회차 1차 스터디 회고 1등에 기여",
  links: [
    {
      href: "https://github.com/BearWithpy/goorm_horoscope_today",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=DLFvBqC-DBY",
      src: YouTube,
      name: "YouTube",
    },
  ],
};
