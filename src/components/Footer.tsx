import styled from "styled-components";
import logo from "../assets/img/logo2.png";
import instagram from "../assets/icon/instagram.svg";
import blog from "../assets/icon/blog.svg";
import youtube from "../assets/icon/youtube.svg";

export const Footer = () => {
  return (
    <FooterWrap>
      <div className="inner">
        <LogoWrap>
          <img src={logo} alt="" />
        </LogoWrap>
        <BottomNavWrap>
          <div className="link-wrap">
            <ul className="link-list">
              <li>
                <ul className="link-depth">
                  <li>
                    <a href="#none">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="#none">이용약관</a>
                  </li>
                  <li>
                    <a href="#none">이메일주소 무단수집거부</a>
                  </li>
                  <li>
                    <a href="#none">법적고지</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link-depth">
                  <li>
                    <a href="#none">지점/센터 찾기</a>
                  </li>
                  <li>
                    <a href="#none">고객센터</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link-depth">
                  <li>
                    <a href="#none">뉴스레터 구독</a>
                  </li>
                  <li>
                    <a href="#none">선생님 소개</a>
                  </li>
                  <li>
                    <a href="#none">선생님 모집</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="address-wrap">
            <span>
              대표이사 : 강호준 서울시 관악구 보라매로 3길 23 (보라매동 729-21)
              대교타워 ㈜대교 TEL : 080-222-0909 <br />
              사업자등록번호 : 112-81-41114 통신판매신고번호 : 제 2013-서울관악
              – 0478호
            </span>
            <p>Copyright 2020 DAEKYO.,LTD. All Rights Reserved</p>
          </div>
        </BottomNavWrap>
        <SnsWrap>
          <a href="#none">
            <img src={instagram} alt="인스타그램 바로가기" />
          </a>
          <a href="#none">
            <img src={blog} alt="블로그 바로가기" />
          </a>
          <a href="#none">
            <img src={youtube} alt="유튜브 바로가기" />
          </a>
        </SnsWrap>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  flex: 0 0 350px;
  width: 100%;
  background-color: ${(t) => t.theme.color.black};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  .inner {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
    padding: 40px 0;
  }
`;
const LogoWrap = styled.h1`
  flex: 0 0 120px;
  img {
    width: 100%;
  }
`;

const BottomNavWrap = styled.nav`
  flex: 1 1 auto;
  margin: 0 50px;
  display: flex;
  flex-flow: column nowrap;
  a,
  span,
  p {
    color: #fff;
  }
  .link-wrap {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    .link-list {
      flex: 1 1 auto;
      display: flex;
      flex-flow: row nowrap;
      > li {
        margin-right: 87px;
        .link-depth {
          display: flex;
          flex-flow: column nowrap;
          > li {
            flex: 0 0 40px;
            display: flex;
            flex-flow: column nowrap;
            a {
              flex: 1 1 auto;
              width: 100%;
              color: ${(t) => t.theme.color.fontLightGray};
              &:hover {
                color: #fff;
              }
            }
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .address-wrap {
    margin-top: 20px;
    flex: 0 0 130px;
    span {
      color: ${(t) => t.theme.color.fontLightGray};
      line-height: 22px;
    }
    p {
      margin-top: 15px;
      color: ${(t) => t.theme.color.fontGray};
    }
  }
`;

const SnsWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    &:not(:first-of-type) {
      margin-top: 3px;
    }
    &:hover {
      img {
        opacity: 1;
      }
    }
    img {
      width: 30px;
      opacity: 0.8;
    }
  }
`;
