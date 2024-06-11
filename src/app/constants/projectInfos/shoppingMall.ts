import Github from "@/app/assets/svg/github.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { FooterType } from "@/app/types/projectComponentTypes/footer";
import image1 from "@/app/assets/projectImages/shoppingMall/image1.png";
import image2 from "@/app/assets/projectImages/shoppingMall/image2.png";
import image3 from "@/app/assets/projectImages/shoppingMall/image3.png";
import image4 from "@/app/assets/projectImages/shoppingMall/image4.png";
import image5 from "@/app/assets/projectImages/shoppingMall/image5.png";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";

export const shoppingMallFirstInfo: FirstInfoType = {
  src: image1,
  title: "Shopping Mall",
  subtitle: "fake api와 firebase를 이용한 쇼핑몰 사이트 구현",
  period: "2023.10.27 ~ 2023.10.31 (5일)",
  personnel: "개인 프로젝트",
  language: ["HTML", "CSS", "JavaScript"],
  framework: ["React"],
  stateLibrary: ["Zustand"],
  description:
    "구름톤 여섯번째 과제로 fake api와 firebase를 이용하여 쇼핑몰 사이트를 구현하였습니다.",
};

export const shoppingMallInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "홈페이지",
    subtitle: "카테고리",
    description: `useEffect를 이용해 fake api의 response를 불러와서 사진처럼 렌더링되게 만들었습니다. 위 메뉴버튼들과 각 상품의 category를 통해 원하는 카테고리의 상품들만 보일 수 있도록 filter를 통해 구현하였습니다.`,
    subtitle2: "장바구니 추가",
    description2: `1. 각 상품의 id를 이용하여 "장바구니 담기"버튼 클릭 시 해당 상품이 장바구니에 들어가게 스프레드 연산자를 이용하여 더해지고 버튼 텍스트가 "담긴 상품"이 되게 구현하였습니다.
2. 장바구니에 들어간 상품의 갯수가 오른쪽 상단 장바구니 버튼에 몇개가 들어갔는지 상태를 통해서 나타나게 구현하였습니다.`,
  },
  {
    image: image3,
    title: "상품 디테일 페이지",
    description: `상품 클릭 시 상품 페이지로 라우팅되어, 상품의 자세 정보를 예시 사진처럼 렌더링되게 구현하였습니다.`,
  },
  {
    image: image4,
    title: "장바구니 페이지",
    description:
      "Zustand 전역상태를 이용해서 담긴 상품을 사진처럼 이 페이지에서 보이게 구현하였습니다. +,-버튼을 통하여 상품 수를 조절할 수 있고, 삭제 버튼 및 전체 가격을 보여주는 기능도 구현하였습니다.",
  },
  {
    image: image5,
    title: "로그인 페이지",
    description:
      "firebase를 이용하여 필요 설정을 통해 로그인을 구현하고, api key와 같은 중요정보는 .env파일을 통하여 저장하고 firebase파일에 임포트하여 쓰는 방식으로 구현하여 사이트의 보안을 높였습니다.",
  },
];

export const shoppingMallFooter: FooterType = {
  takeaway:
    "해당 프로젝트로 api를 사용하는 법을 한번 더 공부할 수 있었고, 전역상태 라이브러리 zustand의 사용법을 알 수 있게 되었습니다.",
  links: [
    {
      href: "https://github.com/HermannChoi/GR6",
      src: Github,
      name: "GitHub",
    },
  ],
};
