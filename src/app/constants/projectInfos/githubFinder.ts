import Github from "@/app/assets/svg/github.svg";
import Notion from "@/app/assets/svg/notionW.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { FooterType } from "@/app/types/projectComponentTypes/footer";
import image1 from "@/app/assets/projectImages/githubFinder/image1.png";
import image2 from "@/app/assets/projectImages/githubFinder/image2.png";
import image3 from "@/app/assets/projectImages/githubFinder/image3.png";
import image4 from "@/app/assets/projectImages/githubFinder/image4.png";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";

export const githubFirstInfo: FirstInfoType = {
  src: image1,
  title: "GitHub Finder",
  subtitle: "GitHub API를 이용해 유저 검색하기",
  period: "2023.10.27 ~ 2023.10.31 (5일)",
  personnel: "개인 프로젝트",
  language: ["HTML", "CSS", " JavaScript"],
  description:
    "구름톤 세번째 과제로 GitHub API를 이용해서 유저의 정보들을 불러오는 기능을 구현한 사이트를 만들었습니다.",
};

export const githubFinderInfo: MiddleContentsType[] = [
  {
    image: image2,
    title: "시작화면",
    description:
      "첫번째 사진이 꽉 채웠다가 헤더로 변하면서 가운데에 위치한 돋보기 버튼이 보이게 구현하였습니다. 이 돋보기 버튼을 누르면 addEventListener의 콜백함수를 통해 스타일을 추가해, 해당 버튼이 fadeOut으로 사라지고 상단에 검색바가 나타나게 되고 여기서 github api를 이용하여 유저 이름을 검색할 수 있게 구현하였습니다.",
  },
  {
    image: image3,
    title: "검색 결과",
    description:
      "api response를 받아서 유저의 사진, 이름 및 유저 정보, 레포지토리 등이 출력되게 구현하였습니다. 깃 차트는 팀원의 도움으로 `https://ghchart.rshah.org/${유저네임}`라는 주소를 이용하면 된다는 정보를 얻고 이를 바탕으로 해당 유저의 깃 차트가 렌더링되게 구현하였습니다.",
  },
  {
    image: image4,
    title: "OOP 방식",
    description:
      "처음에 절차지향 방식으로 구현한 다음에 객체지향 방식으로 다시 코드를 구현하면서 객체지향 프로그래밍 방식을 배웠습니다. (관련 문제 정리 링크는 하단 노션에 있습니다)",
  },
];

export const githubFinderFooter: FooterType = {
  takeaway:
    "해당 프로젝트에서 처음으로 API의 사용법, JS를 이용한 태그생성과 애니메이션 효과 추가, OOP(Object-Oriented Programming)구현방식 등을 터득하는 시간을 가졌습니다.",
  links: [
    {
      href: "https://github.com/HermannChoi/GR3",
      src: Github,
      name: "GitHub",
    },
    {
      href: "https://www.notion.so/10-29-b6e7f264efd94b5590224f153ec45106",
      src: Notion,
      name: "Notion",
    },
  ],
};
