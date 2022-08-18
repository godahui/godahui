import styled from "styled-components";

export const ServiceContainer = () => {
  return (
    <ServiceContWrap style={{ backgroundImage: 'url("assets/img/bg2.png")' }}>
      <div className="btn-wrap">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
      <div className="title-wrap">
        <h2>Service</h2>
        <strong>
          눈높이 교육은 형식적인 학력에 관계없이 개개인의 학력수준에 따라
          <br />
          학습 내용이 정해지는 학습지 중심의 개인별, 능력별 학습 시스템으로
          <br />
          효과적인 학습이 이루어지고 있습니다.
        </strong>
      </div>
      <div className="slide-cont">
        <div className="btn-wrap">
          <button className="prev"></button>
          <button className="next"></button>
        </div>
        <ul className="slider-track">
          <li className="slider-item _1">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service1.png" />
              <p className="text">눈높이iBT 학력진단</p>
            </a>
          </li>
          <li className="slider-item _2">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service2.png" />
              <p className="text">눈높이학습관</p>
            </a>
          </li>
          <li className="slider-item _3">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service3.png" />
              <p className="text">마카다미아</p>
            </a>
          </li>
          <li className="slider-item _4">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service1.png" />
              <p className="text">눈높이iBT 학력진단</p>
            </a>
          </li>
          <li className="slider-item _5">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service2.png" />
              <p className="text">눈높이학습관</p>
            </a>
          </li>
          <li className="slider-item _6">
            <a className="text-wrap">
              <p className="bg"></p>
              <img src="assets/img/service/service3.png" />
              <p className="text">마카다미아</p>
            </a>
          </li>
        </ul>
      </div>
    </ServiceContWrap>
  );
};

const ServiceContWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 685px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 50px 0;
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
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
        border-left: 1px solid #252a34;
        border-bottom: 1px solid #252a34;
        transform: rotate(45deg);
        z-index: 1;
      }
      &:hover::after {
        border-left: 1px solid #525252;
        border-bottom: 1px solid #525252;
      }
    }
    .next {
      transform: rotate(180deg);
    }
  }
  .title-wrap {
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
      line-height: 28px;
    }
  }
  .slide-cont {
    display: flex;
    flex-flow: column nowrap;
    width: 1200px;
    overflow: hidden;
    padding: 50px 0;
    .slider-track {
      display: flex;
      flex-flow: row nowrap;
      height: 428px;
      overflow: hidden;
      .slider-item {
        flex: 0 0 auto;
        display: flex;
        flex-flow: row nowrap;
        width: 390px;
        height: 100%;
        margin: 0 9px;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
