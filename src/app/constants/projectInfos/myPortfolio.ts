import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import Velog from "@/app/assets/svg/velog.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import image1 from "@/app/assets/projectImages/myPortfolio/image1.png";
import image2 from "@/app/assets/projectImages/myPortfolio/image2.png";
import image3 from "@/app/assets/projectImages/myPortfolio/image3.png";
import image4 from "@/app/assets/projectImages/myPortfolio/image4.png";
import image5 from "@/app/assets/projectImages/myPortfolio/image5.png";
import image6 from "@/app/assets/projectImages/myPortfolio/image6.png";
import image7 from "@/app/assets/projectImages/myPortfolio/image7.png";

export const myPortfolioFirstInfo: FirstInfoType = {
  src: image1,
  title: "My Portfolio",
  subtitle: "나의 개발을 보여주는 서비스",
  period: "2024.05.02 ~ 2024.05.12 (11일)",
  personnel: "개인 프로젝트",
  language: ["TypeScript", "HTML", "Emotion"],
  framework: ["Next.js"],
  stateLibrary: ["Zustand"],
  cicd: ["GitHub Actions"],
  etc: ["GitHub", "Vercel"],
  description:
    "저만의 포트폴리오 사이트로 모바일 웹으로도 깨지지 않고 잘 보일 수 있게 구현하고 GitHub Actions로 CI/CD를 사용하여 개발 라이프사이클을 간소화 및 가속화하였습니다.",
};

export const myPortfolioInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "Lighthouse Perfect Score",
    description: `첫번째, 두번째 페이지 모두 라이트하우스 퍼펙트 스코어가 되게 사이트를 만들었습니다.
    
작은 고민은 LCP 관련 애니메이션인데, 페이지의 부드러움을 위해 h1에 fadeIn을 넣었는데 성능 점수가 8점이 떨어져서 없앴다. 애니메이션을 위해서 성능 포기를 어느정도까지 감수해야 하는지 잘 모르겠다.`,
  },
  {
    image: image3,
    title: "코드의 간결화",
    description:
      "코드의 가독성 및 간결화를 위해 중복된 구조의 코드는 최대한 이해하기 쉬운 이름으로 공용 컴포넌트화를 시켜서 코드의 양을 극적으로 줄일 수 있게 구현하였습니다.",
  },
  {
    image: image4,
    title: "입장 이름 입력",
    description: `사이트 입장 시 이름 입력 인풋칸이 뜨고 입력 시 메인 사이트에 입장되도록 구현하였습니다. react-cookie를 이용하여 이름을 쿠키에 저장하고, 이를 이용해 새로고침이 되어도 이름입력 컴포넌트가 안 뜨게 구현하였습니다.`,
  },
  {
    image: image5,
    title: "애니메이션",
    description: `이름 입력 시 사진에 나오는 애니메이션을 구현하여 이용자의 눈을 즐겁게 하는 것을 위해 구현하였습니다.`,
    subtitle2: "문제 발견",
    description2: `마지막에 좌우로 가면서 사라지는데 중간의 원들이 모바일에서는 사라지지 않는 것이다. 코드를 하나하나 보니 모바일에서는 애니메이션(keyframe)에서 display를 지원하지 않는 것 같다. 그래서 99% 에 opacity를 1로, 100%에 0으로 세팅해줬다.
(어차피 상위 컴포넌트 자체가 일정 시간 뒤에 렌더링이 안되게 만듦)`,
  },
  {
    image: image6,
    title: "홈페이지",
    subtitle: "링크",
    description:
      "저의 깃헙, 노션, 벨로그 링크를 걸었고 형식이 같은 것을 이용하여 객체배열로 만들어 맵 함수로 렌더링되게 구현하였습니다.",
    subtitle2: "기술스택 서랍",
    description2: `1. boolean 상태를 이용해 토글함수로 기술스택 창이 열리고 닫히게 구현하고, 화살표를 before과 after 가상 컴포넌트로 구현해 열고 닫힐 때 부드럽게 움직이게 구현하였습니다.
2. 기술 내용도 링크와 마찬가지로 객체배열로 따로 둬서 코드의 간결함과 가독성을 높였습니다.`,
  },
  {
    image: image7,
    title: "프로젝트 기록 페이지",
    subtitle: "UI/UX",
    description: `1. 처음 페이지가 렌더링될 때 원을 클릭하라는 가이드메세지가 중간에 뜨고 원 클릭 시 사라져서 깔끔하게 보이게 하고, 타임라인 바의 position을 sticky로 둬서 스크롤링을 해도 헤더에 계속 위치하게 구현하였습니다.
2. 또한 페이지 최하단에 최상단으로 가는 버튼 구현과 타임라인 버튼들을 클릭 시 프로젝트 시작위치로 이동하게 구현하여 UX를 높였습니다.`,
    subtitle2: "코드 최적화",
    description2: `프로젝트 기록의 구역을 처음, 중간, 하단으로 나눠 컴포넌트화를 함으로써 모든 프로젝트의 기록을 같은 컴포넌트로 사용하고 props만 갈아끼면 되게 구현하여 코드의 상당 양을 줄였습니다.`,
  },
];

export const myPortfolioFooter: FooterType = {
  takeaway: `태그의 기능 및 모바일에서의 애니메이션의 차이점을 알았고, 코드를 구현하면서 어떻게 더 코드를 짧고 가독성 있게 짤 수 있을까 라는 생각으로 계속 구현을 함으로써 코드실력을 조금 더 성장시킬 수 있었던 것 같다.`,
  links: [
    {
      href: "https://github.com/HermannChoi/MyPortfolio",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://velog.io/@hiyunseok347/series/MyPortfolio",
      src: Velog,
      name: "Velog",
    },
  ],
};
