import { FooterType } from "@/app/types/projectComponentTypes/footer";
import GitHub from "@/app/assets/svg/github.svg";
import YouTube from "@/app/assets/svg/youtube.svg";
import Velog from "@/app/assets/svg/velog.svg";
import Palette from "@/app/assets/svg/palette.svg";
import { FirstInfoType } from "@/app/types/projectComponentTypes/firstInfo";
import { MiddleContentsType } from "@/app/types/projectComponentTypes/middleInfo";
import image1 from "@/app/assets/projectImages/palette/image1.png";
import image2 from "@/app/assets/projectImages/palette/image2.png";
import image3 from "@/app/assets/projectImages/palette/image3.png";
import image4 from "@/app/assets/projectImages/palette/image4.png";
import image5 from "@/app/assets/projectImages/palette/image5.png";
import image6 from "@/app/assets/projectImages/palette/image6.png";
import image7 from "@/app/assets/projectImages/palette/image7.png";
import image8 from "@/app/assets/projectImages/palette/image8.png";
import image9 from "@/app/assets/projectImages/palette/image9.png";
import image10 from "@/app/assets/projectImages/palette/image10.png";
import image11 from "@/app/assets/projectImages/palette/image11.png";
import image12 from "@/app/assets/projectImages/palette/image12.png";
import image13 from "@/app/assets/projectImages/palette/image13.png";
import image14 from "@/app/assets/projectImages/palette/image14.png";
import image15 from "@/app/assets/projectImages/palette/image15.png";

export const paletteFirstInfo: FirstInfoType = {
  src: image1,
  title: "Palette* (deployed, server alive)",
  subtitle: "포트폴리오, 이력서 생성 및 채용 서비스",
  period: "2024.03.04 ~ 2024.04.22 (49일)",
  personnel: "6명 (Front-End 3명, Back-End 3명)",
  responsibility: `Front-End
    :UI/UX Design, 로그인/회원가입/정보수정, 프로젝트 기록 CRUD, 이력서 CRU, 평판 CR,및 이에 관한 모든 페이지들, 검색, 홈페이지, 워크스페이스, 마이페이지`,
  language: ["TypeScript", "HTML", "Emotion", "Java"],
  framework: ["Next.js", "Spring Boot"],
  stateLibrary: ["Zustand", "React-query"],
  cicd: ["Github Actions"],
  server: ["Tomcat", "AWS EC2", "NGINX"],
  db: ["MySQL", "Redis(RDS)"],
  etc: ["Slack", "GitHub", "Docker", "Vercel"],
};

export const paletteInfo: MiddleContentsType[] = [
  {
    image: image5,
    title: "홈페이지 : 검색",
    description: `리액트 쿼리 useMutation으로 API통신을 해서 원하는 기술스택과 포지션을 필터링하는 방식으로 검색을 구현하였습니다.
기술스택은 검색으로 연관 검색어가 나옵니다. 위 기술스택 버튼을 누르면 추가, 추가된 기술스택을 누르면 삭제되게 구현하였습니다.`,
  },
  {
    image: image6,
    title: "로그인",
    subtitle: "로그인 / 예외처리",
    description: `1. form태그를 사용하여 onSubmit에 리액트쿼리 useMutation을 사용해서 로그인을 구현하였습니다.
2. 로그인과 비밀번호를 입력하지 않을 시 프론트에서 if문을 사용하여 return으로 API통신을 막았고, 아이디 혹은 비밀번호가 틀릴 시 서버에서 던져주는 에러메세지를 담아서 렌더링되게 구현하였습니다.`,
    subtitle2: "비밀번호 보기 / 로그인 성공",
    description2: `1. boolean상태를 만들어서 삼항연산자로 type을 password와 text로 토글되게 구현하였습니다.
2. api통신 성공 시 토큰과 닉네임, 이메일을 쿠키에 담고 환영메세지와 홈페이지로 넘어가는 라우팅을 구현하여 UI/UX를 향상시켰습니다.`,
  },
  {
    image: image7,
    title: "회원가입",
    subtitle: "가이드 메세지 / 환영메세지",
    description: `1. 인풋이 포커스될 때 각 인풋에 맞는 설명으로 UX를 높였습니다.
2. 회원가입 성공 시 환영 메세지 및 로그인 api통신까지 자동으로 되고 홈페이지로 라우팅되게 구현하여 UI/UX를 향상시켰습니다.`,
    subtitle2: "일반회원 / 기업회원",
    description2: `1. form태그를 사용하여 onSubmit에 리액트쿼리 useMutation을 사용해서 회원가입을 구현하였습니다. 
2. 기술스택을 제외한 모든 정보는 객체타입의 상태로 담고 기술스택은 컴포넌트화로 진행하고 쉽게 쓰기위해 위해 전역상태에 담았습니다.
3. 각 기술스택을 쓰는 페이지들이 처음 렌더링될 때 초기화하는 일을 거쳐줘야 하긴 하지만 이 컴포넌트를 쓸 때마다 useState를 생성해서 쓰는 것중 뭐가 더 좋은 방법일까 생각하고, 그 때 당시에는 코드량 및 컴포넌트 사용 난이도를 생각해서 전역상태로 구현하는게 낫다고 판단하고 진행하였습니다.`,
  },
  {
    image: image8,
    title: "포트폴리오 : Create",
    subtitle: "동적 / 정적 페이지",
    description: `1. useParams와 0~5까지의 숫자 상태를 담아서 질문 하나하나가 렌더링 될 수있게 구현하고 이에 집중할 수 있게 하여 UI/UX를 향상시켰습니다.
2. 간단하게 적을 수 있는 질문들을 동적페이지에서 수행할 수 있게 하고 상태에 저장해 정적페이지에서 이어서 나머지 기록을 진행할 수 있도록 구현하였습니다.
선택한 색깔은 바탕에 칠해지고, 나머지 질문들은 추가 및 삭제할 수 있게 구현하였습니다.

모든 정보를 적고 생성을 누르면 api통신을 통해 페이지가 생성됩니다.￼`,
    subtitle2: "축하메세지",
    description2: `프로젝트(이력서, 평판 작성도 포함) 완료가 완료되면 애니메이션을 만들어 포함시킨 축하메세지가 뜨고, 각 맞는 페이지로 라우팅 되는 것을 구현하여 UI/UX를 높였습니다.
(서비스 링크, 시연영상 참고)`,
  },
  {
    image: image9,
    title: "포트폴리오 : RUD",
    subtitle: "READ",
    description: `1. useParams를 사용해서 각 프로젝트 기록의 고유 id를 사용하여 페이지가 라우팅되게 구현하고, 서버에서 보내주는 각 데이터를 렌더링해서 Read를 구현하였습니다.
2. 페이지 최적화를 위해 query키가 같으면 refetch를 안하는 리액트 쿼리를 이용하여 프로젝트의 id를 전역상태로 담고 같은 id면 refetch를 하지 않고 다르면 데이터를 불러오게 구현하였습니다.`,
    subtitle2: "UPDATE / DELETE",
    description2: `1. Read 페이지에서 상단 수정버튼을 클릭시 read에서 받아온 각 정보를 모두 각 맞는 인풋의 value에 집어넣어서 정보를 수정할 수 있게 구현하였습니다.
  또한, 이 함수를 커스텀 훅으로 만들어 따로 빼서 한 파일에 코드가 다 몰리지 않게 만들어 가독성을 높였습니다.
  2. 워크스페이스 페이지에서 사용자가 생성한 프로젝트 기록들이 띄워지고 이를 각각 삭제할 수 있습니다.`,
  },
  {
    image: image10,
    title: "이력서 : CRU(D는 기획상 없음)",
    subtitle: "CREATE",
    description: `프로젝트와 유사한 방법으로 정보를 상태에 저장했고, 포지션과 가능 기술스택은 회원가입할 때 유저가 저장한 그대로를 useQuery로 api통신하여 정보를 자동으로 박히게 구현하였습니다.
사진은 react-dropzone 라이브러리를 이용하여 드랍을 통한 이미지 넣기도 가능하게 구현하였습니다.


문제(였던 것) :

API 통신을 할 때 문제가 발생했는데 http 관련 문제였다. 헤더에 content-type을 multipart/form-data로 해주었는데 사진을 넣지 않았을 때 에러가 나는 것이다. 그래서 여러가지 방법을 시도하다가 사진을 넣지 않았을 때는 application/json으로 하고 사진이 있을 때는 multipart/form-data로 통신하게 구현하였다.`,
    subtitle2: "READ / UPDATE",
    description2: `1. 프로젝트 기록과 마찬가지로 useParams를 이용해서 라우팅이 되게 진행하였다.
업데이트도 Read할 때 불러왔던 response의 데이터를 상태에 담아서 인풋의 값에 담았다.

프로젝트도 마찬가지고 여러 섹션에 초기상태의 배열의 길이는 하나여서 서버에서 받은 배열을 어떻게 넣을까 고민하였지만, 길이의 길이의 숫자에 맞게 배열을 늘려주는 방식으로 길이를 늘린다음, 정보를 넣는 방식으로 해결하였다.`,
  },
  {
    image: image11,
    title: "이력서 : READ",
    subtitle: "프로젝트 삽입",
    description: `1. 이력서에 자신이 작성한 프로젝트 기록들을 추가시킬 수 있으며 이력서 뷰에서 이 프로젝트들을 클릭할 시 사이드바에서 해당 프로젝트 기록이 나오게 구현하였습니다.
2. 또한 해당 프로젝트에 작성된 평판이 있고, 보는 사람이 서비스 구독중인 기업회원일 시에 작성된 평판도 밑에 보이고 개인회원일 시에는 평판 섹션 자체가 렌더링이 안되게 연산자로 구현하였습니다.`,
  },
  {
    image: image12,
    title: "평판 요청 및 작성",
    subtitle: "요청",
    description: `원하는 프로젝트와 본인의 이름, 작성자의 이름과 전화번호를 입력하면 요청하기 버튼이 활성화되게 구현하였습니다. 버튼을 클릭하면 모달버튼이 뜨고 백에게 통신요청이 갑니다. 백에서 이 정보를 가지고 카카오톡으로 작성페이지의 링크를 보냅니다.

여러 사람에게 보내는 상황이 대부분이라고 판단해 요청이 성공되면 모달이 사라지고 작성자의 이름과 전화번호 상태정보를 빈값으로 만들어 UX를 높였습니다.`,
    subtitle2: "전화번호 하이픈 함수",
    description2: `하이픈(-)이 자동으로 들어가는 함수를 커스텀훅화 하여서 이력서의 전화번호에도 같은 기능이 되게 구현하였습니다.
`,
  },
  {
    image: image13,
    title: "평판 요청 및 작성 : 작성",
    subtitle: "요청",
    description: `1. 쿠키에 엑세스 토근의 유무에 따라 로그인/회원가입 페이지를 띄우고 로그인 시에 작성 페이지의 본인인증 모달로 넘어가게 구현함으로 다시 링크를 누를 필요 없게 만들어 UX를 높였습니다. 여기서 자신의 이름과 전화번호를 치면 성공이라고 뜨며 본격적인 작성 페이지로 넘어갑니다.

2. 각 인풋에 값이 들어가면 useEffect로 달성 진행도를 헤더 밑에 바를 구현하여 알 수 있게 구현함으로써 UI/UX를 높였습니다. 요청 페이지와 마찬가지로 다 작성되지 않으면 제출버튼을 비활성화되게 구현하였습니다.
또한 카카오톡을 통한 링크 접속임으로 휴대폰 사이즈에 맞는 반응형 스타일링을 통하여 깨지지 않고 작성이 되게 구현하였습니다.

3. 버튼 여러번 클릭으로 요청을 2번 이상 보낼 우려가 있으므로 위에서 구현한 로딩중일 때도 버튼을 disabled시켜 안전성을 높였습니다.
`,
  },
  {
    image: image14,
    title: "워크 스페이스",
    description: `리액트 쿼리의 useQuery를 사용하여 이용자의 이력서 및 프로젝트 정보를 불러오고, 이를 사진과 같이 렌더링되게 구현하였습니다.
width가 줄어들 때 스타일링이 깨지는 것을 방지하기 위해, 텍스트는 width 초과 시 ...으로 보이게 구현하고, 프로젝트는 격자 패턴이기에 grid로 스타일링 해 주었습니다.
`,
  },
  {
    image: image15,
    title: "마이 페이지",
    description: `리액트 쿼리의 useQuery를 사용하여 이용자의 개인정보를 불러와서 개인정보 수정 인풋 칸들에 각 맞는 정보를 미리 넣게 구현하였습니다.
닉네임 포지션 및 기술스택 등 개인정보를 수정할 수 있게 구현하였습니다.
`,
  },
];

export const paletteFooter: FooterType = {
  limit: `UX의 향상을 위한 디테일들을 더 추가하면 좋았겠지만 마감기한이 있어서 좀 더 추가할 수 없었던게 아쉬웠다. Router.back이나 history.back함수로 로그인이 되면 다시 평판 작성 페이지로 넘어가게 만들려고 시도를 했지만 왜인지 모르게 한번 더 전의 페이지로 이동되서 포기하고 새로 로그인/회원가입을 만들어서 프리렌더링 방식으로 처리한게 아쉬었다.
  후반에 구현한 기능들은 마감기한때문에 리팩토링을 진행하지 못한 것도 아쉬웠다.`,
  takeaway: `프로젝트/이력서의 CRUD를 통한 많은 객체배열을 저장하고 이를 백과 통신하는 작업, 사진과 함께 json파일을 백과 통신하기 위한 방법, 검색 등등 많은 API 통신을 통해 백과 통신을 원할히 할 수 있는 능력을 얻었고, 복잡한 상태저장상황에서 프론트 단에서 상태를 어떤 식으로 저장해야 하는 지 알 수 있는지 알 수 있게 되었다.`,
  output: "• 구름 풀스택 3회차 파이널 프로젝트 인기상",
  links: [
    {
      href: "https://github.com/Happiness-Meta/final-front",
      src: GitHub,
      name: "GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=ApqW6-y9poI",
      src: YouTube,
      name: "YouTube",
    },
    {
      href: "https://velog.io/@hiyunseok347/series/Palette-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
      src: Velog,
      name: "Velog",
    },
    {
      href: "https://palette.run/",
      src: Palette,
      name: "Palette*",
    },
  ],
};
