import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
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
import image8 from "@/app/assets/projectImages/myPortfolio/image8.png";
import image9 from "@/app/assets/projectImages/myPortfolio/image9.png";

export const myPortfolioFirstInfo: FirstInfoType = {
  src: image1,
  title: "My Portfolio",
  subtitle: "나의 개발을 보여주는 서비스",
  period: "2024.05.02 ~ 2024.05.12 (11일)",
  personnel: "개인 프로젝트",
  language: "TypeScript, HTML, Emotion",
  framework: "Next.js",
  stateLibrary: "-",
  etc: "GitHub, GitHub Actions, Vercel",
  description:
    "저만의 포트폴리오 사이트로 모바일 웹으로도 깨지지 않고 잘 보일 수 있게 구현하였습니다.",
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

  //
  //   {
  //     image: image6,
  //     title: "코드에디터 페이지",
  //     subtitle: "헤더",
  //     description:
  //       "왼쪽에는 사이드바를 열고 닫을 수 있는 버튼, 페이지 이동을 할 수 있는 버튼을 구현하였습니다. 중앙은 저장과 실행(콘솔)버튼을 구현하였습니다. 그리고 오른쪽에는 초대버튼, 다크/라이트 모든 토글 버튼과 유저 관련 정보 드롭다운 기능을 구현하였습니다.",
  //     subtitle2: "메인",
  //     description2: `사이드바에는 파일/디렉토리 CRUD를 구현했고, 코드 폰트 사이즈 조절버튼과 터미널(콘솔)창, 채팅창을 열고 닫을 수 있는 토글버튼들을 구현하였습니다. 그리고 탭에 아무 파일도 없을 시 코드에디터 커버가 렌더링되고 가운데에 유저를 위한 텍스트이 뜨게 구현하였습니다.
  // 또한 re-resizable 라이브러리를 이용해 각 섹션의 크기를 이용자가 조절 할 수 있게 구현하였습니다.`,
  //   },
  //   {
  //     image: image7,
  //     title: "코드에디터 페이지 : 헤더",
  //     subtitle: "페이지 이동 버튼, 유저 전용 드롭다운",
  //     description: `나침반 버튼 클릭 시 width가 늘어나며 홈버튼과 레포지토리 이동 버튼을 구현하였습니다. UX를 위해 버튼 호버 시 ::before를 이용하여 각 버튼이 어디를 뜻하는지의 텍스트를 띄우게 구현하였습니다.
  // 오른쪽은 드롭다운 기능이 구현된 버튼으로, 클릭 시 유저정보 수정페이지, 로그아웃 및 유저의 ID와 닉네임을 볼 수 있게 구현하였습니다.`,
  //   },
  //   {
  //     image: image8,
  //     title: "코드에디터 페이지 : 메인",
  //     description:
  //       "사이드바에서 +,-버튼으로 코드에디터의 폰트크기를 조절할 수 있게 구현하였고, 탭 기능을 구현해서 최근 열어본 파일들을 보이고 이를 통해 사용자가 빠르게 파일 전환을 할 수 있게 구현하였습니다.",
  //   },
  //   {
  //     image: image9,
  //     title: "회원 정보수정 페이지",
  //     description:
  //       "사용 유저의 닉네임 및 비밀번호를 변경할 수 있는 페이지를 구현하였습니다.",
  //     subtitle2: "UI/UX",
  //     description2: `1. 본 서비스의 일원처럼 느껴지게 우주비행사 직원카드처럼 디자인하였습니다.
  // 2. 카드 밑 회원정보 변경 버튼을 누르면 카드가 뒤집어 지면서 정보수정 인풋들이 나오게 구현하였습니다.
  // 3. 각 상황에 맞게 예외처리를 해서 에러메세지가 나오게 구현하였고, 변경을 성공하면 초록색 글씨로 변경이 완료되었다고 뜨고 자동으로 다시 카드의 앞면으로 돌아갑니다. (시연영상 참고)`,
  //   },
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
