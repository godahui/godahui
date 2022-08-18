import styled from "styled-components";
import React, { useState, useEffect } from "react";

interface IProps {
  header?: React.ReactElement;
  container?: React.ReactElement;
  footer?: React.ReactElement;
}

export const Template = ({ header, container, footer }: IProps) => {
  const [scrollY, setScrollY] = useState(0);
  const scrollHeader = scrollY > 150 ? "scroll-header" : "header";

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);

  return (
    <RootWrap>
      <HeaderWrap className={scrollHeader}>{header}</HeaderWrap>
      <ContainerWrap>{container}</ContainerWrap>
      {footer}
    </RootWrap>
  );
};

const RootWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-width: 1280px;
  overflow: hidden;
  position: relative;
`;

const HeaderWrap = styled.header`
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
    animation: slidein 0.3s;
    transform: translateY(-80px);
  }
  &.header {
    background-color: transparent;
    animation: slideOut 0.3s;
    transform: translateY(0px);
  }
  @keyframes slidein {
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

const ContainerWrap = styled.div`
  width: 100%;
  min-width: 1280px;
  overflow: hidden auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
