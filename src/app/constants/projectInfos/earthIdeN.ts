import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
import Velog from "@/app/assets/svg/velog.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import image1 from "@/app/assets/projectImages/earthIdeN/image1.png";
import image2 from "@/app/assets/projectImages/earthIdeN/image2.png";
import image3 from "@/app/assets/projectImages/earthIdeN/image3.png";
import image4 from "@/app/assets/projectImages/earthIdeN/image4.png";
import image5 from "@/app/assets/projectImages/earthIdeN/image5.png";
import image6 from "@/app/assets/projectImages/earthIdeN/image6.png";
import image7 from "@/app/assets/projectImages/earthIdeN/image7.png";
import image8 from "@/app/assets/projectImages/earthIdeN/image8.png";
import image9 from "@/app/assets/projectImages/earthIdeN/image9.png";

export const earthIdeNFirstInfo: FirstInfoType = {
  src: image1,
  title: "Earth-IDE-N",
  subtitle: "웹 기반 통합개발환경 서비스",
  period: "2024.01.28 ~ 2024.02.28 (32일)",
  personnel: "6명 (Front-End 2명, Back-End 4명)",
  responsibility:
    "Front-End (UI/UX 디자인, 홈페이지, 로그인/회원가입/정보수정, 파일트리/파일탭/코드에디터/터미널)",
  language: ["TypeScript", "HTML", "SCSS(module)", "Java"],
  framework: ["React", "vite", "Spring Boot"],
  stateLibrary: ["Zustand", "React-query"],
  server: ["Tomcat", "AWS EC2", "NGINX"],
  db: ["MySQL"],
  etc: ["Slack", "GitHub"],
};

export const earthIdeNInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "다크/라이트 모드",
    description:
      "body태그에 data-theme이라는 옵션을 추가해서 dark 또는 light라는 값을 주고 이에 따라 모드가 변하게 구현하였습니다. 함수는 간단하게 값을 조건으로 토글방식으로 변하게 구현했습니다.",
  },
  {
    image: image3,
    title: "반응형",
    description:
      "스타일링을 주로 다 flex를 적용시켜서 구현해 잘 깨지지 않게 구현하고, 필요 시 예시 사진처럼 @media를 활용하여 넓이 조건에 반응해 깨지지 않게 스타일링을 하였습니다.",
  },
  {
    image: image4,
    title: "로그인/회원가입 페이지",
    description: `사용자 편의를 생각하여 한 페이지에 로그인과 회원가입 기능을 구현하였습니다. 각 섹션 하단의 sign in/up버튼 클릭 시 가림막이 넘어가며, 로그인 또는 회원가입을 할 수 있습니다.
회원가입 성공 시 예시 사진처럼 환영인사가 뜨고 자동으로 왼쪽 로그인 섹션으로 넘어갑니다.`,
  },
  {
    image: image5,
    title: "로그인/회원가입 페이지 : 예외처리",
    description:
      "로그인/회원가입 시도 시, 입력하지 않은 input이 있는 같은 경우같은 프론트에서 처리할 수 있는 것들은 api 통신 전 return으로 막고, 이미 이메일이 있는 경우같은 백에서 처리해야 하는 것은 response로 에러메세지를 받고 이를 상태에 넣어서 에러메세지를 보여주는 식으로 구현하였습니다.",
  },
  {
    image: image6,
    title: "코드에디터 페이지",
    subtitle: "헤더",
    description:
      "왼쪽에는 사이드바를 열고 닫을 수 있는 버튼, 페이지 이동을 할 수 있는 버튼을 구현하였습니다. 중앙은 저장과 실행(콘솔)버튼을 구현하였습니다. 그리고 오른쪽에는 초대버튼, 다크/라이트 모든 토글 버튼과 유저 관련 정보 드롭다운 기능을 구현하였습니다.",
    subtitle2: "메인",
    description2: `사이드바에는 파일/디렉토리 CRUD를 구현했고, 코드 폰트 사이즈 조절버튼과 터미널(콘솔)창, 채팅창을 열고 닫을 수 있는 토글버튼들을 구현하였습니다. 그리고 탭에 아무 파일도 없을 시 코드에디터 커버가 렌더링되고 가운데에 유저를 위한 텍스트이 뜨게 구현하였습니다.
또한 re-resizable 라이브러리를 이용해 각 섹션의 크기를 이용자가 조절 할 수 있게 구현하였습니다.`,
  },
  {
    image: image7,
    title: "코드에디터 페이지 : 헤더",
    subtitle: "페이지 이동 버튼, 유저 전용 드롭다운",
    description: `나침반 버튼 클릭 시 width가 늘어나며 홈버튼과 레포지토리 이동 버튼을 구현하였습니다. UX를 위해 버튼 호버 시 ::before를 이용하여 각 버튼이 어디를 뜻하는지의 텍스트를 띄우게 구현하였습니다.
오른쪽은 드롭다운 기능이 구현된 버튼으로, 클릭 시 유저정보 수정페이지, 로그아웃 및 유저의 ID와 닉네임을 볼 수 있게 구현하였습니다.`,
  },
  {
    image: image8,
    title: "코드에디터 페이지 : 메인",
    description:
      "사이드바에서 +,-버튼으로 코드에디터의 폰트크기를 조절할 수 있게 구현하였고, 탭 기능을 구현해서 최근 열어본 파일들을 보이고 이를 통해 사용자가 빠르게 파일 전환을 할 수 있게 구현하였습니다.",
  },
  {
    image: image9,
    title: "회원 정보수정 페이지",
    description:
      "사용 유저의 닉네임 및 비밀번호를 변경할 수 있는 페이지를 구현하였습니다.",
    subtitle2: "UI/UX",
    description2: `1. 본 서비스의 일원처럼 느껴지게 우주비행사 직원카드처럼 디자인하였습니다.
2. 카드 밑 회원정보 변경 버튼을 누르면 카드가 뒤집어 지면서 정보수정 인풋들이 나오게 구현하였습니다.
3. 각 상황에 맞게 예외처리를 해서 에러메세지가 나오게 구현하였고, 변경을 성공하면 초록색 글씨로 변경이 완료되었다고 뜨고 자동으로 다시 카드의 앞면으로 돌아갑니다. (시연영상 참고)`,
  },
];

export const earthIdeNFooter: FooterType = {
  takeaway: `본격적인 많은 api통신을 통해 로그인/회원가입, 파일 저장 등을 구현할 수 있는 능력과 어떻게 데이터를 이용해서 처리하는 지 알 수 있게 되었다.
    파일트리를 구현하는데 제일 애를 먹었는데 재귀함수를 통한 복잡한 코드를 구현함으로써 코딩의 실력을 늘려나갈 수 있었다.`,
  output: "• 구름 풀스택 3회차 세미 파이널 프로젝트 1등",
  links: [
    {
      href: "https://github.com/Happiness-Meta/web-ide-front",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=UAN7rn7Wkxg&t=2s",
      src: YouTube,
      name: "YouTube",
    },
    {
      href: "https://velog.io/@hiyunseok347/series/Web-IDE-N",
      src: Velog,
      name: "Velog",
    },
  ],
};
