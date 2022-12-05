import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import mainSlideItems from "../mock/main";

export const SliderContainer = () => {
  const [inx, setInx] = useState(0);
  const slideTrack = useRef() as React.MutableRefObject<HTMLUListElement>;

  const goNext = () => {
    setInx(inx + 1);
    if (inx === 2) {
      setInx(0);
      return;
    }
  };

  const goPrev = () => {
    setInx(inx - 1);
    if (inx === 0) {
      setInx(2);
      return;
    }
  };

  useEffect(() => {
    const slideTrackCount = slideTrack.current.children.length;
    slideTrack.current.style.transition = "all 0.5s ease 0s";
    slideTrack.current.style.width = slideTrackCount * 1320 + "px";
    slideTrack.current.style.marginLeft = "-" + inx * 1280 + "px";
  }, [inx]);

  return (
    <SliderContWrap
      style={{ backgroundImage: 'url("assets/img/bg1.png")' }}
      className="slide-in"
    >
      <div className="btn-wrap">
        <button className="prev" onClick={goPrev} />
        <button className="next" onClick={goNext} />
      </div>
      <div className="carousel-cont">
        <div className="page-wrap">
          <p className="current-page">0{inx + 1}</p>
          <p>/</p>
          <p className="all-page">0{mainSlideItems.length}</p>
        </div>
        <ul ref={slideTrack} className="slider-track">
          {mainSlideItems.map((o, inx) => {
            const title = o.title;
            const text = o.text;
            const subText = o.subText;
            const img = o.img;
            return (
              <li
                className={`slider-item _${inx + 1}`}
                key={`slide-list-${inx}`}
              >
                <div className="text-wrap">
                  <strong>{title}</strong>
                  <p>{text}</p>
                  {subText ? <span>{subText}</span> : <></>}
                </div>
                <div className="img-wrap">
                  <img className="img" src={img} alt="" />
                </div>
              </li>
            );
          })}
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
  animation: slidein 0.6s ease;
  @keyframes slidein {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  }
  // 슬라이드 컨테이너
  .carousel-cont {
    flex: 0 0 auto;
    padding: 140px 0 0;
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
      z-index: 1;
      p {
        font-size: ${(t) => t.theme.fontSize.medium};
        margin: 0 2px;
        &.current-page {
          font-size: 24px;
          color: ${(t) => t.theme.color.black};
        }
        &.all-page {
          color: ${(t) => t.theme.color.fontGray};
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
            font-size: ${(t) => t.theme.fontSize.large};
            font-weight: ${(t) => t.theme.fontWeight.bold};
            line-height: 48px;
            margin-bottom: 27px;
            word-break: keep-all;
          }
          p {
            display: inline-block;
            font-size: ${(t) => t.theme.fontSize.medium};
            font-weight: 24px;
            line-height: 24px;
            margin-bottom: 27px;
            word-break: keep-all;
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
              top: 30px;
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
          .text-wrap {
            width: 608px;
          }
          .img-wrap .img {
            max-width: 500px;
          }
        }
        &._2 {
          .text-wrap {
            width: 365px;
          }
          .img-wrap .img {
            max-width: 800px;
          }
        }
        &._3 {
          .text-wrap {
            width: 560px;
          }
          .img-wrap .img {
            max-width: 600px;
          }
        }
      }
    }
  }
`;
