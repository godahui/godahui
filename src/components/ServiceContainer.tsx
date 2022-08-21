import styled from "styled-components";
import banner from "../assets/img/banner.png";
import { service } from "../mock/service";
import { useState, useRef, useEffect } from "react";

export const ServiceContainer = () => {
  const [inx, setInx] = useState(0);
  const slideTrack = useRef() as React.MutableRefObject<HTMLUListElement>;
  const goNext = () => {
    if (inx === 1) {
      return;
    }
    setInx(inx + 1);
  };
  const goPrev = () => {
    if (inx === 0) {
      return;
    }
    setInx(inx - 1);
  };

  useEffect(() => {
    const slideTrackCount = slideTrack.current.children.length;
    slideTrack.current.style.transition = "all 0.5s ease 0s";
    slideTrack.current.style.width = slideTrackCount * 400 + "px";
    slideTrack.current.style.marginLeft = "-" + inx * 1200 + "px";
  }, [inx]);

  return (
    <ServiceContWrap style={{ backgroundImage: 'url("assets/img/bg2.png")' }}>
      <BtnWrap>
        <button className="prev" onClick={goPrev} disabled={inx === 0} />
        <button className="next" onClick={goNext} disabled={inx === 1} />
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
        <ul className="slider-track" ref={slideTrack}>
          {service.map((o, inx) => {
            return (
              <li key={`service-list-${inx}`} className="slider-item">
                <a className="img-wrap">
                  <p className="explain">{o.text}</p>
                  <button>자세히보기</button>
                  <img src={o.img} />
                  <p className="text">{o.name}</p>
                </a>
              </li>
            );
          })}
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
    &:hover::after:not(:disabled) {
      border-left: 1px solid ${(t) => t.theme.color.blackGray};
      border-bottom: 1px solid ${(t) => t.theme.color.blackGray};
    }
    &:disabled::after {
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
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
  height: 400px;
  overflow: hidden;
  margin: 50px 0;
  .slider-track {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    padding: 20px 0 20px;
    z-index: 2;
    .slider-item {
      flex: 0 0 400px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-bottom: 20px;
      > a {
        display: inline-block;
        width: 340px;
        height: 340px;
        &::before {
          content: "";
          display: block;
          opacity: 0;
          width: 333px;
          height: 335px;
          border-radius: 39px;
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          background-color: rgba(130, 96, 231, 0.5);
          backdrop-filter: blur(4px);
        }
        .explain,
        button {
          display: none;
        }
        img {
          width: 340px;
          height: 340px;
          border-radius: 40px;
        }
        .text {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          z-index: 3;
        }
      }
      &:hover {
        transform: translateY(-10px);
        transition: all 0.4s;
        > a {
          &::before {
            opacity: 1;
            transition: all 0.2s;
          }
          .explain {
            display: block;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            width: 280px;
            height: 200px;
            word-break: keep-all;
            line-height: 20px;
            color: #fff;
            font-size: ${(t) => t.theme.fontSize.regular};
          }
          button {
            display: block;
            position: absolute;
            bottom: 19%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            font-size: ${(t) => t.theme.fontSize.small};
            font-weight: ${(t) => t.theme.fontWeight.bold};
            background-color: #fff;
            width: 240px;
            height: 40px;
            border-radius: 40px;
            &:hover {
              background-color: #f6f2f8;
            }
            &:active {
              background-color: #e1d7e6;
            }
          }
        }
      }
      &:active {
        transform: translateY(-10px) scale(0.98);
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
