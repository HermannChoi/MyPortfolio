import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import image1 from "@/app/assets/projectImages/cpkNote/image1.png";
import image2 from "@/app/assets/projectImages/cpkNote/image2.png";
import image3 from "@/app/assets/projectImages/cpkNote/image3.png";
import image4 from "@/app/assets/projectImages/cpkNote/image4.png";

export const cpkNoteFirstInfo: FirstInfoType = {
  src: image1,
  title: "CPK Note",
  subtitle: "구글 Keep 클론코딩",
  period: "2023.12.15 ~ 2023.01.05 (22일)",
  personnel: "3명 (Front-End 3명)",
  responsibility:
    "Front-End (UI/UX 구현, 사이드바, 메인 바디, 라벨 CRUD, 메모 RUD)",
  language: ["TypeScript", "HTML", "SCSS(module)"],
  framework: ["Next.js"],
  stateLibrary: ["Redux"],
  etc: ["Slack", "GitHub"],
};

export const cpkNoteInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "사이드바",
    description:
      "마우스 호버가 되면 펼쳐지고 아니면 다시 접어지게 동작하고, boolean상태와 연산자를 이용해서 클래스를 추가하는 방식으로 헤더의 메뉴버튼을 누르면 계속 펼쳐지게 구현하였습니다.",
  },
  {
    image: image3,
    title: "모달 & 라벨 CRUD",
    description:
      "react-modal 라이브러리를 이용하여 사이드바 메뉴에서 '라벨 수정' 클릭시, 모달창이 뜨며 여기서 라벨 CRUD를 가능하게 구현하였습니다.",
  },
  {
    image: image4,
    title: "메모 RUD & 이동 & 고정",
    description:
      "메모가 생성된 뒤에, 메모 호버 시 버튼들이 보이고, 보관함 및 휴지통 버튼 클릭 시 push와 filter함수를 통하여 각 맞는 페이지로 이동되게 구현하였습니다. 또한 핀포인트를 클릭 시 메모 각 고유의 id를 찾아내어 고정하는 기능을 구현하였고, 메모 클릭 시 메모 모달창이 나와 메모를 수정할 수 있게 구현하였습니다.",
  },
];

export const cpkNoteFooter: FooterType = {
  limit:
    "라벨 생성 시 같은 이름이면 오류 메세지가 뜨면서 생성을 막는 기능을 구현하였습니다. 하지만 영어 이름을 생성하면 정상적으로 작동하지만 한글을 입력하면 중복되지 않은 이름임에도 불구하고, 생성과 오류 메세지가 둘 다 작동했습니다. 구글링을 해보고 알아보았지만 왜 그런지 찾아내지 못하였습니다.",
  takeaway:
    "라벨과 메모 CRUD, 컴포넌트화에 대한 props 등을 통하여 상태관리 능력을 기를 수 있는 시간이었습니다.",
  output: "• 구름 풀스택 3회차 2차 스터디 회고 1등에 기여",
  links: [
    {
      href: "https://github.com/Matilda0730/231208-goormtoy2-noteapp?tab=readme-ov-file",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=vrjqFqPJpmU",
      src: YouTube,
      name: "YouTube",
    },
  ],
};
