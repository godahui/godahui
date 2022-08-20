interface ISlideItem {
  title: string;
  text: string;
  subText?: string;
  img: string;
}

const mainSlideItems: ISlideItem[] = [
  {
    title: `
        국내/외 19개국 전세계의 아이들에게
        사랑받는 학습지`,
    text: `학부모가 뽑은 교육브랜드 15년 연속 대상 수상.
        \n
        브랜드 파워(K-BPI) 1위 24년 연속 선정 (2022년 5월 기준)`,
    img: `assets/img/main1.png`,
  },
  {
    title: `
    눈높이야~
    여름방학을 부탁해!`,
    text: `나의 여름방학 계획을 공유하고 선물받자!`,
    subText: `이벤트 기간 : 07월 29일(금) ~ 08월 28일(일)`,
    img: `assets/img/main2.png`,
  },
  {
    title: `
    제 3회 눈높이 iBT 총괄평가
    자신만만 평가전`,
    text: `
    전국 초등학생 모두 모여라!
    초등학교 1학기 전범위 총정리! 나의 실력 확인하고, 선물도 받자!
    `,
    subText: `이벤트 기간 : 07월 11일(월) ~ 08월 07일(일)`,
    img: `assets/img/main3.png`,
  },
];

export default mainSlideItems;
