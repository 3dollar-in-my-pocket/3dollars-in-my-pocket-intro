import News1 from "./assets/images/img_news1.png";
import News2 from "./assets/images/img_news2.png";
import News3 from "./assets/images/img_news3.png";
import News4 from "./assets/images/img_news4.png";
import News5 from "./assets/images/img_news5.png";
import News6 from "./assets/images/img_news6.png";
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
    link: "https://www.youtube.com/watch?v=KUZHQpH0M_E",
  },
  {
    id: 2,
    thumbnail: News2,
    title: "붕어빵 파는 곳, 제가 어딨는지 다 알려드릴게요",
    author: "시시비비 ∙ 2020년 12월 6일",
    link: "",
  },
  {
    id: 3,
    thumbnail: News3,
    title: "어서와 ‘붕세권’은 처음이지?… 붕어빵·호떡 등 재료 인기",
    author: "국민일보  ∙  2020년 12월 3일",
    link: "http://news.kmib.co.kr/article/view.asp?arcid=0924167811",
  },
  {
    id: 4,
    thumbnail: News4,
    title: "“붕어빵 어디서 파냐고? 앱으로 찾아봐”",
    author: "이데일리 ∙ 2020년 11월 23일",
    link: "https://www.edaily.co.kr/news/read?newsId=01272646625968672",
  },
  {
    id: 5,
    thumbnail: News5,
    title: "“붕어빵 어디서 파냐고? 앱으로 찾아봐”",
    author: "까탈로그 ∙ 2020년 11월 13일",
    link: "",
  },
  {
    id: 6,
    thumbnail: News6,
    title: "가슴속 3천원 붕어빵에 누구보다 진심이었던 한국인의 사이드 프로젝트",
    author: "디프만 미디엄 ∙ 2020년 11월 19일",
    link: "https://medium.com/depromeet/%EA%B0%80%EC%8A%B4%EC%86%8D-3%EC%B2%9C%EC%9B%90-%EB%B6%95%EC%96%B4%EB%B9%B5%EC%97%90-%EB%88%84%EA%B5%AC%EB%B3%B4%EB%8B%A4-%EC%A7%84%EC%8B%AC%EC%9D%B4%EC%97%88%EB%8D%98-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%B8%EC%9D%98-%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2a3f714026b3",
  },
];

export const creatorData = {
  Designer: [
    { photo: "", name_en: "Lee Yuni", name_ko: "이윤이" },
    { photo: "", name_en: "Park Eunji", name_ko: "박은지" },
  ],
  Marketer: [
    { photo: "", name_en: "Yoon Dayoung", name_ko: "윤다영" },
    { photo: "", name_en: "Lee Hanna", name_ko: "이한나" },
  ],
  iOS: [{ photo: "", name_en: "Yoo Hyunsik", name_ko: "유현식" }],
  ANDROID: [
    { photo: "", name_en: "Lee Yoonji", name_ko: "이윤지" },
    { photo: "", name_en: "Kim Minho", name_ko: "김민호" },
  ],
  BACKEND: [{ photo: "", name_en: "Kang Seungho", name_ko: "강승호" }],
};

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
      id: 1,
      title: "지도",
      description:
        "메인페이지에서 가장 가까운 다섯개의 가게를 바로 만나볼 수 있어요. ",
    },
  ],
  list: [
    {
      id: 1,
      title: "다른 카테고리 바로가기",
      description:
        "메인페이지에서 원하는 길거리 음식 리스트로\n간단하게 이동할 수 있어요.",
    },
    {
      id: 2,
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
    figure: "10,000",
    description: "일일활성 유저 수",
  },
  {
    id: 2,
    icon: { src: DownloadIcon, sort: "download icon" },
    figure: "380,000",
    description: "전체 다운로드 수",
  },
  {
    id: 3,
    icon: { src: MapPinIcon, sort: "map pin icon" },
    figure: "15,000",
    description: "등록된 점포 수",
  },
];

export const footerData = [
  {
    id: 1,
    title: "Creator",
    content: `Designer 이윤이, 박은지\niOS 유현식\nAndroid 이윤지, 김민호\nBackend 강승호\nMarketer 윤다영, 이한나`,
  },
  {
    id: 2,
    title: "Contact",
    content: "3dollarinmypocket@gmail.com",
  },
];
