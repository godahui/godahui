import styled from "styled-components";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/styled";

interface IProps {
  header?: React.ReactElement;
  container?: React.ReactElement;
  footer?: React.ReactElement;
}

export const Template = ({ header, container, footer }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RootWrap>
        <HeaderWrap>{header}</HeaderWrap>
        <ContainerWrap>{container}</ContainerWrap>
        {footer}
      </RootWrap>
    </ThemeProvider>
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
`;

const HeaderWrap = styled.header`
  flex: 0 0 140px;
  display: flex;
  flex-flow: column nowrap;
  max-width: 1320px;
  min-width: 1280px;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const ContainerWrap = styled.div`
  width: 100%;
  min-width: 1280px;
  overflow: hidden auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
