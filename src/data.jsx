import News1 from "./assets/images/img_news1.svg";
import News2 from "./assets/images/img_news2.svg";
import News3 from "./assets/images/img_news3.svg";
import News4 from "./assets/images/img_news4.svg";
import News5 from "./assets/images/img_news5.svg";
import News6 from "./assets/images/img_news6.svg";
import UsersIcon from "./assets/icons/icon_users.svg";
import DownloadIcon from "./assets/icons/icon_download.svg";
import MapPinIcon from "./assets/icons/icon_map_pin.svg";

export const newsData = [
  {
    id: 1,
    thumbnail: News1,
    title:
      "붕어빵에 ㄹㅇ진심인 사람들이 작정하고 만든 앱 '가슴속3천원' 직접 써봤다! (feat. 개발자...",
    author: "유튜브 14F채널 ∙ 2020년 12월 1일",
  },
  {
    id: 2,
    thumbnail: News2,
    title: "붕어빵 파는 곳, 제가 어딨는지 다 알려드릴게요",
    author: "시시비비 ∙ 2020년 12월 6일",
  },
  {
    id: 3,
    thumbnail: News3,
    title: "어서와 ‘붕세권’은 처음이지?… 붕어빵·호떡 등 재료 인기",
    author: "국민일보  ∙  2020년 12월 3일",
  },
  {
    id: 4,
    thumbnail: News4,
    title: "“붕어빵 어디서 파냐고? 앱으로 찾아봐”",
    author: "이데일리 ∙ 2020년 11월 23일",
  },
  {
    id: 5,
    thumbnail: News5,
    title: "“붕어빵 어디서 파냐고? 앱으로 찾아봐”",
    author: "까탈로그 ∙ 2020년 11월 13일",
  },
  {
    id: 6,
    thumbnail: News6,
    title: "가슴속 3천원 붕어빵에 누구보다 진심이었던 한국인의 사이드 프로젝트",
    author: "디프만 미디엄 ∙ 2020년 11월 19일",
  },
];

export const reviewsData = [
  {
    id: 1,
    emoji: "😎",
    desc: "대단해요!! 붕어빵 러버인데\n제가 매일 생각했었던 앱을 진짜\n만들어주셨네요!!!! 겨울에 애용하겠습니다~",
    nickname: "jjamieeun",
  },
  {
    id: 2,
    emoji: "😇",
    desc: "덕분에 붕어빵가게 찾았습니다 ㅎㅎ\n정말정말감사합니다 내위치말고 가려는곳\n근처 가게도  검색되면 좋겟습니다 감사합니다",
    nickname: "민추추추추",
  },
  {
    id: 3,
    emoji: "😻",
    desc: "회사끝나고 따끈한 붕어빵이 너무 먹고싶어서\n찾아보다가 못찾아서 친구한테 이런어플 누가\n만들어줬음좋겠다 하소연했는데 정말 생겼네요!!",
    nickname: "zzzzwhat",
  },
  {
    id: 4,
    emoji: "💖",
    desc: "너무 유용하고 귀엽고 사랑스러워요!! 들어갈때\n 모션도 재밌고 일러스트도 귀엽고 찾기도 편하구 사람들 리뷰보는맛도 있어요 🥰",
    nickname: "꿀버르",
  },
  {
    id: 5,
    emoji: "😍",
    desc: "사랑해요 삶의 질을 높여주셨어요\n진짜 미친앱 안깔면 후회해요 진짜 레알로\n행복 뿅뼝 사랑해요",
    nickname: "오ㅓ뉴ㅠ이쥬ㅏ웊재뉴헉굥흐튜",
  },
  {
    id: 6,
    emoji: "😋",
    desc: "좋은 어플 만들어주셔서 감사합니다 날 쌀쌀해질 때 생각나는 붕어빵, 문어빵 등 바로 찾을 수 있는 어플 만들어주셔서 정말 감사드립니다",
    nickname: "난오늘도고구마",
  },
];

export const featuresData = {
  main: [
    {
      title: "카테고리 바로가기",
      description:
        "메인페이지에서 원하는 길거리 음식 리스트로\n간단하게 이동할 수 있어요.",
    },
    {
      title: "지도",
      description:
        "지도에서 붕어빵, 문어빵, 계란빵, 호떡까지!\n가장 가까운 다섯개의 가게를 바로 만나볼 수 있어요. ",
    },
  ],
  list: [
    {
      title: "다른 카테고리 바로가기",
      description:
        "메인페이지에서 원하는 길거리 음식 리스트로\n간단하게 이동할 수 있어요.",
    },
    {
      title: "내 근처가게 리스트",
      description:
        "지도에서 붕어빵, 문어빵, 계란빵, 호떡까지!\n가장 가까운 다섯개의 가게를 바로 만나볼 수 있어요. ",
    },
  ],
  detail: [
    {
      id: 1,
      title: "상세페이지",
      description:
        "상세페이지에서 메뉴와 제보자를 비롯한\n가게의 상세 정보를 확인할 수 있습니다.",
    },
    {
      id: 2,
      title: "메뉴수정",
      description:
        "가슴속 3천원은 모든 사용자가\n정보를 채울 수 있어요. 사진과 메뉴를 제보해서\n더 풍성한 가슴속 3천원을 만들어 나가요!",
    },
    {
      id: 3,
      title: "리뷰 작성",
      description:
        "리뷰를 작성하고 나의 경험을 사용자 여러분들과\n함께 공유할 수 있습니다.",
    },
  ],
};

export const figuresData = [
  {
    id: 1,
    icon: { src: UsersIcon, sort: "users icon" },
    figure: 5000,
    description: "일일활성 유저 수",
  },
  {
    id: 2,
    icon: { src: DownloadIcon, sort: "download icon" },
    figure: 5000,
    description: "iOS App 전체 다운로드 수",
  },
  {
    id: 3,
    icon: { src: MapPinIcon, sort: "map pin icon" },
    figure: 5000,
    description: "등록된 점포 수",
  },
];

export const footerData = [
  {
    id: 1,
    title: "Creator",
    content: `Designer 이윤이, 양효정\nFront-end 유현식, 이윤지\nBackend 전해성, 손지수, 이유리`,
  },
  {
    id: 2,
    title: "Contact",
    content: "3dollarinmypocket@gmail.com",
  },
];
