import Github from "@/app/assets/svg/github.svg";
import { FooterType } from "@/app/types/projectComponentTypes/footer";

export const netflixFirst = {
  name: "Netflix 사이트 만들기",
  subtitle: "HTML/CSS를 이용해 Netflix화면 구현하기",
  techStack: "기술 스택 : HTML, CSS",
  period: " 개발 기간 : 2023.10.18 ~ 2023.10.20 (3일)",
  description:
    "구름톤 첫번째 과제로 HTML과 CSS만을 이용해 넷플릭스 첫화면을 구현해 보았습니다.",
};

export const netflixInfo = [
  {
    title: "시작화면",
    explanation:
      "넷플릭스와 비슷한 느낌을 주기 위해 처음 페이지가 렌더링이 될 때, 넷플릭스 텍스트가 점점 커지면서 검은색 화면이 fade out되는 효과를 구현했습니다.",
  },
  {
    title: "호버효과",
    explanation:
      "호버효과를 주는 법을 강의에서 배우고 적용하여 UI/UX를 높였습니다.",
  },
];

export const netflixFooter: FooterType = {
  takeaway:
    "해당 프로젝트에서 CSS의 기본적인 스타일링 방법과 flex를 이용한 정렬방법을 터득했습니다.",
  links: [
    {
      href: "https://github.com/HermannChoi/GoormAssignment",
      src: Github,
      name: "GitHub",
    },
  ],
};
