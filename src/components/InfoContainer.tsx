import styled from "styled-components";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { info } from "../mock/info";

export const InfoContainer = () => {
  const [tab, setTab] = useState("online");
  const onChangeTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-tab") as string;
    setTab(value);
  };
  const filterInfo = info.find((o) => o.key === tab);
  return (
    <InfoContWrap>
      <div className="inner">
        <LeftArea>
          <TitleWrap>
            <h2>
              눈높이,
              <br />
              어디에서 공부할 수 있나요?
            </h2>
          </TitleWrap>
          <TabWrap>
            <ul>
              <li className={tab === "online" ? "active" : ""}>
                <a href="#none" onClick={onChangeTab} data-tab="online">
                  <span>
                    <FaLaptopHouse />
                  </span>
                  <p>온라인으로</p>
                </a>
              </li>
              <li className={tab === "home" ? "active" : ""}>
                <a href="#none" onClick={onChangeTab} data-tab="home">
                  <span>
                    <FaHome />
                  </span>
                  <p>선생님과 집에서</p>
                </a>
              </li>
              <li className={tab === "book" ? "active" : ""}>
                <a href="#none" onClick={onChangeTab} data-tab="book">
                  <span>
                    <FaBook />
                  </span>
                  <p>교재만 받기</p>
                </a>
              </li>
              <li className={tab === "study" ? "active" : ""}>
                <a href="#none" onClick={onChangeTab} data-tab="study">
                  <span>
                    <FaSchool />
                  </span>
                  <p>공부방에서</p>
                </a>
              </li>
              <li className={tab === "learning" ? "active" : ""}>
                <a href="#none" onClick={onChangeTab} data-tab="learning">
                  <span>
                    <FaChalkboardTeacher />
                  </span>
                  <p>러닝센터에서</p>
                </a>
              </li>
            </ul>
          </TabWrap>
        </LeftArea>
        <RightArea>
          <div className="text-wrap">
            <span>{filterInfo?.name}</span>
            <p>{filterInfo?.text}</p>
          </div>
          <div className="img-wrap">
            <img src={filterInfo?.img} alt="공부장소" />
          </div>
        </RightArea>
      </div>
    </InfoContWrap>
  );
};

const InfoContWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff6f6;
  padding: 80px 0 120px;
  .inner {
    flex: 0 0 450px;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
  }
`;
const LeftArea = styled.div`
  flex: 0 0 447px;
  display: flex;
  flex-flow: column nowrap;
`;
const TitleWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  max-width: 1320px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
  h2 {
    flex: 0 0 auto;
    font-size: ${(t) => t.theme.fontSize.title};
    line-height: 40px;
  }
`;
const TabWrap = styled.div`
  flex: 0 0 auto;
  > ul {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row wrap;
    > li {
      display: flex;
      flex-flow: column nowrap;
      flex: 0 0 calc(100% / 3 - 30px);
      height: 95px;
      margin: 0 8px;
      &:not(:nth-child(n + 4)) {
        margin-bottom: 20px;
      }
      &:nth-child(3) a span svg {
        width: 28px;
        height: 28px;
      }
      &.active a {
        > span svg {
          fill: ${(t) => t.theme.color.red};
        }
        p {
          color: ${(t) => t.theme.color.red};
        }
      }
      > a {
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        > span {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          width: 70px;
          background-color: #fff;
          border-radius: 50%;
          margin-bottom: 9px;
          svg {
            width: 36px;
            height: 36px;
            fill: ${(t) => t.theme.color.fontGray};
          }
        }
        > p {
          flex: 0 0 auto;
          word-break: keep-all;
        }
      }
      &:hover {
        > a {
          > span {
            svg {
              fill: ${(t) => t.theme.color.red};
            }
          }
          > p {
            color: ${(t) => t.theme.color.red};
          }
        }
      }
    }
  }
`;
const RightArea = styled.div`
  padding-left: 50px;
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  position: relative;
  .text-wrap {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 350px;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0px 2px 20px ${(t) => t.theme.color.shadow};
    padding: 25px 30px;
    width: 330px;
    border-radius: 32px;
    span {
      flex: 0 0 30px;
      font-size: ${(t) => t.theme.fontSize.medium};
      font-weight: ${(t) => t.theme.fontWeight.bold};
    }
    p {
      flex: 1 1 auto;
      word-break: keep-all;
      font-size: ${(t) => t.theme.fontSize.regular};
      line-height: 18px;
    }
  }
  .img-wrap {
    flex: 0 0 450px;
    height: 100%;
    background-color: #ccc;
    overflow: hidden;
    border-radius: 40px;
  }
`;
