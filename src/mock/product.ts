export interface IPropductType {
  baby?: IPropductItem[];
  element?: IPropductItem[];
  middle?: IPropductItem[];
  high?: IPropductItem[];
  adult?: IPropductItem[];
}
export interface IPropductItem {
  name: string;
  img: string;
  type:
    | "과학영역" //과학영역
    | "언어영역" //언어영역
    | "수리영역" //수리영역
    | "외국어영역" //외국어영역
    | "사회영역" //사회영역
    | "통합영역" //통합영역
    | "스마트학습영역"; //스마트학습영역
}

export const productSubTabList = [
  {
    label: "baby",
    value: ["전체영역", "언어영역", "수리영역", "외국어영역", "과학영역"],
  },
  {
    label: "element",
    value: [
      "전체영역",
      "언어영역",
      "수리영역",
      "외국어영역",
      "과학영역",
      "사회영역",
      "통합영역",
      "스마트학습영역",
    ],
  },
  {
    label: "middle",
    value: [
      "전체영역",
      "언어영역",
      "수리영역",
      "외국어영역",
      "과학영역",
      "사회영역",
    ],
  },
  { label: "high", value: ["전체영역"] },
  { label: "adult", value: ["전체영역", "외국어영역"] },
];

export const product: IPropductType = {
  baby: [
    {
      name: "눈높이한글똑똑",
      img: "../assets/img/book/baby/언어영역 (1).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이한자똑똑",
      img: "../assets/img/book/baby/언어영역 (2).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이한자",
      img: "../assets/img/book/baby/언어영역 (3).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이국어",
      img: "../assets/img/book/baby/언어영역 (4).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이놀이똑똑",
      img: "../assets/img/book/baby/수리영역 (1).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이수학똑똑",
      img: "../assets/img/book/baby/수리영역 (2).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이수학",
      img: "../assets/img/book/baby/수리영역 (3).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이사고력수학",
      img: "../assets/img/book/baby/수리영역 (4).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이한자똑똑",
      img: "../assets/img/book/baby/외국어영역 (1).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이영어똑똑",
      img: "../assets/img/book/baby/외국어영역 (2).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이영어",
      img: "../assets/img/book/baby/외국어영역 (3).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이일본어",
      img: "../assets/img/book/baby/외국어영역 (4).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이과학플러스온",
      img: "../assets/img/book/baby/과학영역 (1).jpg",
      type: "과학영역",
    },
  ],
  element: [
    {
      name: "눈높이스쿨국어",
      img: "../assets/img/book/element/언어영역 (1).jpg",
      type: "언어영역",
    },
    {
      name: "대교 써밋 어휘력",
      img: "../assets/img/book/element/언어영역 (2).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이영역국어",
      img: "../assets/img/book/element/언어영역 (3).jpg",
      type: "언어영역",
    },
    {
      name: "내신완공",
      img: "../assets/img/book/element/언어영역 (4).jpg",
      type: "언어영역",
    },
    {
      name: "대교 써밋 스코어국어",
      img: "../assets/img/book/element/언어영역 (5).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이국어",
      img: "../assets/img/book/element/언어영역 (6).jpg",
      type: "언어영역",
    },
    {
      name: "대교 써밋 스텝국어",
      img: "../assets/img/book/element/언어영역 (7).jpg",
      type: "언어영역",
    },
    {
      name: "i Grammer",
      img: "../assets/img/book/element/외국어영역 (1).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이영어",
      img: "../assets/img/book/element/외국어영역 (2).jpg",
      type: "외국어영역",
    },
    {
      name: "써밋 스피킹",
      img: "../assets/img/book/element/외국어영역 (3).jpg",
      type: "외국어영역",
    },
    {
      name: "Eye Level",
      img: "../assets/img/book/element/외국어영역 (4).jpg",
      type: "외국어영역",
    },
    {
      name: "i Listening",
      img: "../assets/img/book/element/외국어영역 (5).jpg",
      type: "외국어영역",
    },
    {
      name: "대교 써밋 스텝영어",
      img: "../assets/img/book/element/외국어영역 (6).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이아티맘",
      img: "../assets/img/book/element/통합영역 (1).jpg",
      type: "통합영역",
    },
    {
      name: "눈높이수학",
      img: "../assets/img/book/element/수리영역 (1).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이수학V",
      img: "../assets/img/book/element/수리영역 (2).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이스쿨수학",
      img: "../assets/img/book/element/수리영역 (3).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이사고력수학",
      img: "../assets/img/book/element/수리영역 (4).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이과학플러스온",
      img: "../assets/img/book/element/과학영역 (1).jpg",
      type: "과학영역",
    },
    {
      name: "대교 써밋 스텝영어",
      img: "../assets/img/book/element/스마트학습영역 (1).jpg",
      type: "스마트학습영역",
    },
    {
      name: "대교 써밋 스피킹",
      img: "../assets/img/book/element/스마트학습영역 (2).jpg",
      type: "스마트학습영역",
    },
    {
      name: "대교 써밋 스텝국어",
      img: "../assets/img/book/element/스마트학습영역 (3).jpg",
      type: "스마트학습영역",
    },
    {
      name: "써밋 스코어국어",
      img: "../assets/img/book/element/스마트학습영역 (4).jpg",
      type: "스마트학습영역",
    },
    {
      name: "눈높이사회플러스온",
      img: "../assets/img/book/element/사회영역 (1).jpg",
      type: "사회영역",
    },
  ],
  middle: [
    {
      name: "눈높이과학플러스온",
      img: "../assets/img/book/middle/과학영역 (1).jpg",
      type: "과학영역",
    },
    {
      name: "눈높이사회플러스온",
      img: "../assets/img/book/middle/사회영역 (1).jpg",
      type: "사회영역",
    },
    {
      name: "눈높이중등사회역사",
      img: "../assets/img/book/middle/사회영역 (2).jpg",
      type: "사회영역",
    },
    {
      name: "눈높이수학V",
      img: "../assets/img/book/middle/수리영역 (1).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이사고력수학",
      img: "../assets/img/book/middle/수리영역 (2).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이수학",
      img: "../assets/img/book/middle/수리영역 (3).jpg",
      type: "수리영역",
    },
    {
      name: "눈높이영역국어",
      img: "../assets/img/book/middle/언어영역 (1).jpg",
      type: "언어영역",
    },
    {
      name: "내신완공",
      img: "../assets/img/book/middle/언어영역 (2).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이국어",
      img: "../assets/img/book/middle/언어영역 (3).jpg",
      type: "언어영역",
    },
    {
      name: "눈높이한자",
      img: "../assets/img/book/middle/언어영역 (4).jpg",
      type: "언어영역",
    },
    {
      name: "i Grammer",
      img: "../assets/img/book/middle/외국어영역 (1).jpg",
      type: "외국어영역",
    },
    {
      name: "대교 써밋 스텝영어 중등",
      img: "../assets/img/book/middle/외국어영역 (2).jpg",
      type: "외국어영역",
    },
    {
      name: "Eye Level",
      img: "../assets/img/book/middle/외국어영역 (3).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이일본어",
      img: "../assets/img/book/middle/외국어영역 (4).jpg",
      type: "외국어영역",
    },
    {
      name: "i Listening",
      img: "../assets/img/book/middle/외국어영역 (5).jpg",
      type: "외국어영역",
    },
  ],
  high: [
    {
      name: "눈높이수학",
      img: "../assets/img/book/high/통합영역 (1).jpg",
      type: "통합영역",
    },
    {
      name: "i Listening",
      img: "../assets/img/book/high/통합영역 (2).jpg",
      type: "통합영역",
    },
    {
      name: "i Grammer",
      img: "../assets/img/book/high/통합영역 (3).jpg",
      type: "통합영역",
    },
    {
      name: "눈높이영어",
      img: "../assets/img/book/high/통합영역 (4).jpg",
      type: "통합영역",
    },
    {
      name: "Eye Level",
      img: "../assets/img/book/high/통합영역 (5).jpg",
      type: "통합영역",
    },
    {
      name: "눈높이국어",
      img: "../assets/img/book/high/통합영역 (6).jpg",
      type: "통합영역",
    },
    {
      name: "눈높이일본어",
      img: "../assets/img/book/high/통합영역 (7).jpg",
      type: "통합영역",
    },
    {
      name: "내신완공",
      img: "../assets/img/book/high/통합영역 (8).jpg",
      type: "통합영역",
    },
  ],
  adult: [
    {
      name: "i Listening",
      img: "../assets/img/book/adult/외국어영역 (1).jpg",
      type: "외국어영역",
    },
    {
      name: "i Grammer",
      img: "../assets/img/book/adult/외국어영역 (2).jpg",
      type: "외국어영역",
    },
    {
      name: "Eye Level",
      img: "../assets/img/book/adult/외국어영역 (3).jpg",
      type: "외국어영역",
    },
    {
      name: "눈높이일본어",
      img: "../assets/img/book/adult/외국어영역 (4).jpg",
      type: "외국어영역",
    },
  ],
};
