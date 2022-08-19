import styled from "styled-components";
import banner from "../assets/img/banner.png";

export const ServiceContainer = () => {
  return (
    <ServiceContWrap style={{ backgroundImage: 'url("assets/img/bg2.png")' }}>
      <BtnWrap>
        <button className="prev"></button>
        <button className="next"></button>
      </BtnWrap>
      <TitleWrap>
        <h2>Service</h2>
        <strong>
          눈높이 교육은 형식적인 학력에 관계없이 개개인의 학력수준에 따라 학습
          내용이 정해지는
          <br />
          학습지 중심의 개인별, 능력별 학습 시스템으로 효과적인 학습이
          이루어지고 있습니다.
        </strong>
      </TitleWrap>
      <SlideCont>
        <div className="btn-wrap">
          <button className="prev"></button>
          <button className="next"></button>
        </div>
        <ul className="slider-track">
          <li className="slider-item _1">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service1.png" />
            </a>
            <p className="text">눈높이iBT 학력진단</p>
          </li>
          <li className="slider-item _2">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service2.png" />
            </a>
            <p className="text">눈높이학습관</p>
          </li>
          <li className="slider-item _3">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service3.png" />
            </a>
            <p className="text">마카다미아</p>
          </li>
          <li className="slider-item _4">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service1.png" />
            </a>
            <p className="text">눈높이iBT 학력진단</p>
          </li>
          <li className="slider-item _5">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service2.png" />
            </a>
            <p className="text">눈높이학습관</p>
          </li>
          <li className="slider-item _6">
            <button>자세히보기</button>
            <a className="img-wrap">
              <p className="explain">
                자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나
                확인 가능합니다.
              </p>
              <img src="assets/img/service/service3.png" />
            </a>
            <p className="text">마카다미아</p>
          </li>
        </ul>
      </SlideCont>
      <BannerWrap>
        <a>
          <img src={banner} />
        </a>
      </BannerWrap>
    </ServiceContWrap>
  );
};

const ServiceContWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 20px 0 0;
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
`;

const BtnWrap = styled.div`
  width: 100%;
  max-width: 1420px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
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
      border-left: 1px solid ${(t) => t.theme.color.black};
      border-bottom: 1px solid ${(t) => t.theme.color.black};
      transform: rotate(45deg);
      z-index: 1;
    }
    &:hover::after {
      border-left: 1px solid ${(t) => t.theme.color.blackGray};
      border-bottom: 1px solid ${(t) => t.theme.color.blackGray};
    }
  }
  .next {
    transform: rotate(180deg);
  }
`;
const TitleWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  max-width: 1320px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    flex: 0 0 65px;
    font-size: ${(t) => t.theme.fontSize.title};
  }
  strong {
    flex: 0 0 auto;
    font-size: ${(t) => t.theme.fontSize.largeRegular};
    font-weight: ${(t) => t.theme.fontWeight.regular};
    line-height: 32px;
  }
`;

const SlideCont = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 1200px;
  overflow: hidden;
  margin: 50px 0;
  .slider-track {
    display: flex;
    flex-flow: row nowrap;
    height: 380px;
    overflow: hidden;
    padding: 20px 0;
    .slider-item {
      flex: 0 0 auto;
      display: flex;
      flex-flow: column nowrap;
      width: 390px;
      height: 100%;
      margin: 0 9px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      button {
        display: none;
      }
      .img-wrap {
        flex: 0 0 auto;
        width: 350px;
        height: 350px;
        border-radius: 40px;
        overflow: hidden;
        &::before {
          content: "";
          display: block;
          backdrop-filter: blur(6px);
          background-color: rgba(130, 96, 231, 0.5);
          width: 343px;
          height: 345px;
          border-radius: 40px;
          position: absolute;
          top: -2px;
          left: 4px;
          z-index: 1;
          transition: opacity 0.2s;
          visibility: hidden;
          opacity: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .explain {
          display: none;
        }
      }
      .text {
        flex: 0 0 30px;
      }
      &:hover {
        transition: transform 0.5s;
        transform: translateY(-15px);
        button {
          display: block;
          font-size: ${(t) => t.theme.fontSize.small};
          font-weight: ${(t) => t.theme.fontWeight.bold};
          border-radius: 32px;
          background-color: #fff;
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translate(-50%, 0);
          width: 250px;
          height: 44px;
          z-index: 2;
          &:hover {
            background-color: #f3f3f3;
          }
          &:active {
            background-color: #e8e0eb;
          }
        }
        .img-wrap {
          position: relative;
          &::before {
            opacity: 1;
            visibility: visible;
          }
          .explain {
            padding: 30px;
            font-size: ${(t) => t.theme.fontSize.regular};
            line-height: 20px;
            display: inline-block;
            position: absolute;
            z-index: 2;
            top: 15%;
            color: #fff;
          }
        }
        &:active {
          transform: scale(0.99) translateY(-15px);
        }
      }
    }
  }
`;

const BannerWrap = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: #fff6f6;
  a {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
