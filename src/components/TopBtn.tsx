import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

export const TopBtn = () => {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <BtnWrap onClick={onScrollTop}>
      <FaChevronUp />
    </BtnWrap>
  );
};

const BtnWrap = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  background-color: ${(t) => t.theme.color.violet};
  box-shadow: 0px 2px 20px ${(t) => t.theme.color.shadow};
  opacity: 0.8;
  &:hover {
    animation: hovering 2s infinite;
    background-color: #9c89d3;
    opacity: 1;
  }
  &:active {
    background-color: #8c7bbe;
    transform: scale(0.98);
    opacity: 1;
  }
  svg {
    width: 38px;
    height: 38px;
    padding-bottom: 4px;
    fill: #fff;
  }
  @keyframes hovering {
    0% {
      bottom: 5%;
    }
    10% {
      bottom: 6%;
    }
    50% {
      bottom: 4%;
    }
    100% {
      bottom: 5%;
    }
  }
`;
