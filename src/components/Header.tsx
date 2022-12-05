import styled from "styled-components";
import React, { useState, useEffect } from "react";

interface IProps {
  scrollHeader: "scroll-header" | "header";
}

export const Header = ({ scrollHeader }: IProps) => {
  return (
    <RootWrap className={scrollHeader}>
      <NavWrap>
        <TopNav className="top-nav">
          <h1 className="logo">
            <a href="/">
              <img src="assets/img/logo.png" alt="대교 눈높이 로고" />
            </a>
          </h1>
          <div className="right-area">
            <input
              type="text"
              style={{ backgroundImage: 'url("assets/icon/search.svg")' }}
            />
            <button>
              <p>로그인</p>
            </button>
            <button>
              <p>회원가입</p>
            </button>
          </div>
        </TopNav>
        <BottomNav className="bottom-nav">
          <Gnb className="left-gnb">
            <li>
              <a href="#none">눈높이소개</a>
              <GnbDepth className="_1">
                <li>
                  <a href="#none">브랜드스토리</a>
                </li>
                <li>
                  <a href="#none">눈높이학습서비스</a>
                </li>
              </GnbDepth>
            </li>
            <li>
              <a href="#none">제품소개</a>
              <GnbDepth className="_2">
                <li>
                  <a href="#none">제품소개</a>
                </li>
                <li>
                  <a href="#none">제품 한눈에보기</a>
                </li>
                <li>
                  <a href="#none">제품카달로그</a>
                </li>
              </GnbDepth>
            </li>
            <li>
              <a href="#none">커뮤니티</a>
              <GnbDepth className="_3">
                <li>
                  <a href="#none">눈높이소식</a>
                </li>
                <li>
                  <a href="#none">이벤트</a>
                </li>
                <li>
                  <a href="#none">교육정보</a>
                </li>
              </GnbDepth>
            </li>
            <li>
              <a href="#none">회원서비스</a>
              <GnbDepth className="_4">
                <li>
                  <a href="#none">눈높이siBT 학력진단</a>
                </li>
                <li>
                  <a href="#none">눈높이365</a>
                </li>
                <li>
                  <a href="#none">눈높이학습관</a>
                </li>
                <li>
                  <a href="#none">눈높이성장판</a>
                </li>
              </GnbDepth>
            </li>
            <li>
              <a href="#none">눈높이올림피아드</a>
              <GnbDepth className="_5">
                <li>
                  <a href="#none">대회소개</a>
                </li>
                <li>
                  <a href="#none">기출문제</a>
                </li>
                <li>
                  <a href="#none">결과조회</a>
                </li>
                <li>
                  <a href="#none">FAQ</a>
                </li>
              </GnbDepth>
            </li>
          </Gnb>
          <Gnb className="right-gnb">
            <li>
              <a href="#none">가까운 눈높이찾기</a>
            </li>
            <li>
              <a href="#none">온라인 상담신청</a>
            </li>
            <li>
              <a href="#none">눈높이학습서비스</a>
            </li>
          </Gnb>
        </BottomNav>
      </NavWrap>
    </RootWrap>
  );
};
const RootWrap = styled.header`
  flex: 0 0 140px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  min-width: 1280px;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
  &.scroll-header {
    backdrop-filter: blur(16px);
    background-color: rgba(255, 255, 255, 0.9);
    animation: slideIn 0.3s;
    transform: translateY(-80px);
  }
  &.header {
    background-color: transparent;
    animation: slideOut 0.3s;
    transform: translateY(0px);
  }
  @keyframes slideIn {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-80px);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(-80px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const NavWrap = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 1320px;
`;

const TopNav = styled.div`
  flex: 0 0 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .logo {
    padding: 0 20px;
  }
  .right-area {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 10px;
    input {
      width: 44px;
      height: 44px;
      border-radius: 16px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center center;
      outline: none;
      cursor: pointer;
      font-size: 0;
      transition: width 0.4s ease-in-out;
      &:hover,
      &:active,
      &:focus {
        width: 240px;
        background-color: rgb(255, 255, 255);
        background-position: 20px center;
        padding-left: 50px;
        padding-right: 20px;
        box-shadow: 0px 2px 20px ${(t) => t.theme.color.shadow};
        font-size: ${(t) => t.theme.fontSize.regular};
      }
    }
    button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 0 10px;
      margin-left: 2px;
      cursor: pointer;
      p {
        font-size: ${(t) => t.theme.fontSize.small};
        color: #333;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const BottomNav = styled.div`
  flex: 0 0 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Gnb = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  &.left-gnb {
    flex: 0 0 auto;
    justify-content: flex-start;
  }
  &.right-gnb {
    flex: 1 1 auto;
    justify-content: flex-end;
  }
  > li {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    height: 100%;
    > a {
      flex: 0 0 auto;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      height: 100%;
      padding: 0 20px;
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: translateY(-4px);
      > a {
        color: ${(t) => t.theme.color.red};
        & + ul {
          height: auto;
          padding: 10px 0;
          transition: top 0.4s;
          top: 60px;
        }
      }
    }
  }
`;
const GnbDepth = styled.ul`
  position: absolute;
  top: 70px;
  right: 50%;
  transform: translateX(50%);
  width: 180px;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 20px ${(t) => t.theme.color.shadow};
  border-radius: 16px;
  height: 0;
  overflow: hidden;
  padding: 0;
  li {
    flex: 0 0 40px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    a {
      width: 100%;
      padding: 12px 0;
      color: ${(t) => t.theme.color.fontBlack};
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }
`;
