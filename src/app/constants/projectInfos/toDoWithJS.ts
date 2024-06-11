import Github from "@/app/assets/svg/github.svg";
import image1 from "@/app/assets/projectImages/toDoWithJS/image1.png";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { FooterType } from "@/app/types/projectComponentTypes/footer";
import image2 from "@/app/assets/projectImages/toDoWithJS/image2.png";
import image3 from "@/app/assets/projectImages/toDoWithJS/image3.png";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";

export const toDoWithJSFirstInfo: FirstInfoType = {
  src: image1,
  title: "ToDo List with JavaScript",
  subtitle: "HTML/CSS/JS를 이용해 todo 리스트 구현하기",
  period: "2023.10.24 ~ 2023.10.26 (3일)",
  personnel: "개인 프로젝트",
  language: ["HTML", "CSS", "JavaScript"],
  description:
    "구름톤 두번째 과제로 HTML/CSS, JS를 이용해 todo리스트를 구현해 보았습니다.",
};

export const toDoWithJSInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "시작화면",
    description: `처음 환영인사로 사용자를 반기고 fadeOut으로 1초 후에 사라지게 구현하였습니다.`,
  },
  {
    image: image3,
    title: "UI/UX / 메모 CRUD",
    subtitle: "UI/UX",
    description: `추가 버튼을 호버 시 JS로 innerHTML이 바꾸는 기능과 css의 transition으로 부드럽게 바뀌도록 구현하였습니다.
      
오류 리뷰 :
버튼 호시 직전 시 계속 잠깐의 시간차로 텍스트 변화와 컴포넌트 크기 변화가 동시에 일어나지 않았다. 왜 그런걸까 하고 계속 여러가지를 시도해보다가 정답을 찾았다.
border때문에 컴포넌트 안에 들어가는 시간과 텍스트 영역으로 가는 시간에 차이가 났던 것이다. 그래서 border를 없애고 오류를 고쳐주었다.`,
    subtitle2: "메모 CRUD",
    description2: `1. 추가 버튼 클릭 시 메모 list가 추가되고 UX를 위해 input에 autoFocus를 주었습니다.
2. 연필 클릭 시 메모 수정, - 버튼 클릭 시 삭제되게 구현하게 만들었습니다.
3. 체크 박스 클릭 시 메모 텍스트에 줄이 그어지게 구현하였습니다.
      `,
  },
];

export const toDoWithJSFooter: FooterType = {
  takeaway:
    "해당 프로젝트에서 JavaScript로의 태그 생성 및 CRUD 로직을 배울 수 있었습니다.",
  links: [
    {
      href: "https://github.com/HermannChoi/GR2",
      src: Github,
      name: "GitHub",
    },
  ],
};
