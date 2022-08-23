import styled from "styled-components";
import React from "react";
import { TopBtn } from "./TopBtn";

interface IProps {
  header?: React.ReactElement;
  container?: React.ReactElement;
  footer?: React.ReactElement;
}

export const Template = ({ header, container, footer }: IProps) => {
  return (
    <RootWrap>
      {header}
      <ContainerWrap>{container}</ContainerWrap>
      {footer}
      <TopBtn />
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

const ContainerWrap = styled.div`
  width: 100%;
  min-width: 1280px;
  overflow: hidden auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
