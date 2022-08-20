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
          <img src={logo} />
        </LogoWrap>
        <BottomNavWrap></BottomNavWrap>
        <SnsWrap>
          <a href="#none">
            <img src={instagram} />
          </a>
          <a href="#none">
            <img src={blog} />
          </a>
          <a href="#none">
            <img src={youtube} />
          </a>
        </SnsWrap>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  flex: 0 0 450px;
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
  margin: 0 20px;
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
  }
`;
