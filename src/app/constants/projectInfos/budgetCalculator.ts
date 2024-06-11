import Github from "@/app/assets/svg/github.svg";
import Notion from "@/app/assets/svg/notionW.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { FooterType } from "@/app/types/projectComponentTypes/footer";
import image1 from "@/app/assets/projectImages/budgetCalculator/image1.png";
import image2 from "@/app/assets/projectImages/budgetCalculator/image2.png";
import image3 from "@/app/assets/projectImages/budgetCalculator/image3.png";
import image4 from "@/app/assets/projectImages/budgetCalculator/image4.png";
import image5 from "@/app/assets/projectImages/budgetCalculator/image5.png";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";

export const budgetCalculatorFirstInfo: FirstInfoType = {
  src: image1,
  title: "Budget Calculator",
  subtitle: "React를 이용한 예산 계산기(CRUD) 구현하기",
  period: "2023.11.13 ~ 2023.11.15 (3일)",
  personnel: "개인 프로젝트",
  language: ["HTML", "CSS", "JavaScript"],
  framework: ["React"],
  description:
    "구름톤 다섯번째 과제로 React를 이용하여 예산 계산을 할 수 있는 기능(CRUD)을 구현하였습니다.",
};

export const budgetCalculatorInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "지출 추가",
    description:
      "지출 항목과 비용을 입력하고 엔터 혹은 +버튼을 누르면 지출이 항목,비용,고유 아이디를 가지고 추가됩니다.",
  },
  {
    image: image3,
    title: "헤더 메세지",
    description: `헤더 이름을 상태로 만들고, CRUD 동작 시 함수에 헤더메세지를 변경하고 헤더에 클래스를 더해서 색을 변경하는 방식으로 사진처럼 구현되게 만들었습니다.
텍스트에 애니메이션 효과를 부여해 상태(텍스트)가 변경될 때마다 오른쪽에서 나타나서 왼쪽으로 사라지게 구현하였습니다.`,
  },
  {
    image: image4,
    title: "지출 : 수정 / 삭제",
    description: `수정 : 추가된 항목의 수정버튼을 누르면 본 항목의 상태(항목,비용)이 인풋의 value에 넣어지고, +버튼에서 연필버튼으로 바뀌게 됩니다. 수정 완료 시 다시 인풋 value는 초기화되고 버튼도 +버튼으로 되돌아갑니다.
삭제 : 고유 아이디를 비교하여 filter함수를 통해서 삭제를 구현햇고, deleteAll버튼을 구현하여 다 삭제할 수 있게 만들었습니다. `,
  },
  {
    image: image5,
    title: "숫자 애니메이션",
    description: `react-animated-numbers 라이브버리를 이용하여 숫자가 변경될 때마다 롤링되게 구현하였습니다.`,
  },
];

export const budgetCalculatorFooter: FooterType = {
  takeaway:
    "리액트의 설치법 및 사용 법, useState와 useEffect 등 간단한 훅 사용법을 알게 되고 컴포넌트화에 대해 알 수 있는 시간이었다.",
  links: [
    {
      href: "https://github.com/HermannChoi/GR5",
      src: Github,
      name: "GitHub",
    },
  ],
};
