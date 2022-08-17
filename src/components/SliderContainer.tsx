import styled from "styled-components";

export const SliderContainer = () => {
  return (
    <SliderContWrap style={{ backgroundImage: 'url("assets/img/bg1.png")' }}>
      <div className="btn-wrap">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
      <div className="carousel-cont">
        <ul className="slider-track">
          <li className="slider-item _1">
            <div className="text-wrap">
              <strong>
                국내/외 19개국 전세계의 아이들에게
                <br />
                사랑받는 학습지
              </strong>
              <p>
                학부모가 뽑은 교육브랜드 15년 연속 대상 수상.
                <br />
                브랜드 파워(K-BPI) 1위 24년 연속 선정 (2022년 5월 기준)
              </p>
            </div>
            <div className="img-wrap">
              <img className="img" src="assets/img/main1.png" />
            </div>
          </li>
          <li className="slider-item _2">
            <div className="text-wrap">
              <strong>
                눈높이야~
                <br />
                여름방학을 부탁해!
              </strong>
              <p>나의 여름방학 계획을 공유하고 선물받자!</p>
              <span>이벤트 기간 : 07월 29일(금) ~ 08월 28일(일)</span>
            </div>
            <div className="img-wrap">
              <img className="img" src="assets/img/main2.png" />
            </div>
          </li>
          <li className="slider-item _3">
            <div className="text-wrap">
              <strong>
                제 3회 눈높이 iBT 총괄평가
                <br />
                자신만만 평가전
              </strong>
              <p>
                전국 초등학생 모두 모여라!
                <br />
                초등학교 1학기 전범위 총정리! 나의 실력 확인하고, 선물도 받자!
              </p>
              <span>이벤트 기간 : 07월 11일(월) ~ 08월 07일(일)</span>
            </div>
            <div className="img-wrap">
              <img className="img" src="assets/img/main3.png" />
            </div>
          </li>
        </ul>
      </div>
    </SliderContWrap>
  );
};

const SliderContWrap = styled.section`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  .btn-wrap {
    width: 100%;
    max-width: 1420px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    .prev,
    .next {
      width: 44px;
      height: 44px;
      &::after {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        border-left: 1px solid ${(props) => props.theme.color.black};
        border-bottom: 1px solid ${(props) => props.theme.color.black};
        transform: rotate(45deg);
        z-index: 1;
      }
      &:hover::after {
        border-left: 1px solid ${(props) => props.theme.color.gray2};
        border-bottom: 1px solid ${(props) => props.theme.color.gray2};
      }
    }
    .next {
      transform: rotate(180deg);
    }
  }
  // 슬라이드 컨테이너
  .carousel-cont {
    flex: 0 0 auto;
    padding: 140px 0 50px;
    max-width: 1320px;
    overflow: hidden;
    position: relative;
    .page-wrap {
      position: absolute;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      p {
        font-size: 20px;
        margin: 0 2px;
        &.current-page {
          font-size: ${(props) => props.theme.fontSize.fontSizeLargeRegular};
          color: ${(props) => props.theme.color.black};
        }
        &.all-page {
          color: ${(props) => props.theme.fontColor.fontColorGray};
        }
      }
    }
    .slider-track {
      display: flex;
      flex-flow: row nowrap;
      height: 760px;
      overflow: hidden;
      .slider-item {
        flex: 0 0 auto;
        display: flex;
        flex-flow: row nowrap;
        width: 1280px;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        .text-wrap {
          display: flex;
          flex-flow: column nowrap;
          flex: 0 0 auto;
          padding-left: 40px;
          padding-bottom: 120px;
          strong {
            display: inline-block;
            font-size: ${(props) => props.theme.fontSize.fontSizeLarge};
            font-size: ${(props) => props.theme.fontWeight.fontWeightBold};
            line-height: 48px;
            margin-bottom: 27px;
          }
          p {
            display: inline-block;
            font-size: ${(props) => props.theme.fontSize.fontSizeMideum};
            font-size: ${(props) => props.theme.fontWeight.fontWeightRegular};
            line-height: 24px;
            margin-bottom: 27px;
          }
        }
        .img-wrap {
          flex: 0 0 auto;
          height: 100%;
          position: relative;
          @keyframes hover {
            0% {
              top: 20px;
            }
            10% {
              top: 22px;
            }
            50% {
              top: 40px;
            }
            100% {
              top: 20px;
            }
          }
          .img {
            position: absolute;
            right: 60px;
            animation: hover 2s infinite;
          }
        }
        &._1 {
          .img-wrap .img {
            max-width: 500px;
          }
        }
        &._2 {
          .img-wrap .img {
            max-width: 800px;
          }
        }
        &._3 {
          .img-wrap .img {
            max-width: 600px;
          }
        }
      }
    }
  }
`;
