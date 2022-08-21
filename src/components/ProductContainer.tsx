import styled from "styled-components";
import React, { useState } from "react";
import { productSubTabList, product, IPropductItem } from "../mock/product";

export const ProductContainer = () => {
  const [tab, setTab] = useState("baby");
  const [subTab, setSubTab] = useState("전체영역");
  const onChangeTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-tab") as string;
    setTab(value);
    setSubTab("전체영역");
  };
  const onChangeSubTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-id") as string;
    setSubTab(value);
  };

  const subTabList = [...productSubTabList].filter((o) => o.label === tab);
  const getProductList = (): IPropductItem[] => {
    switch (tab) {
      case "baby":
        return product.baby as IPropductItem[];
      case "element":
        return product.element as IPropductItem[];
      case "middle":
        return product.middle as IPropductItem[];
      case "high":
        return product.high as IPropductItem[];
      case "adult":
        return product.adult as IPropductItem[];
      default:
        return product.baby as IPropductItem[];
    }
  };

  const filterList = getProductList().filter((o) => o.type === subTab);

  return (
    <ProductContWrap>
      <TitleWrap>
        <h2>Product</h2>
        <strong>지금 우리아이에게 필요한 눈높이는?</strong>
      </TitleWrap>
      <TabWrap>
        <ul className="top-tab">
          <li className={tab === "baby" ? "active" : ""}>
            <a href="#none" onClick={onChangeTab} data-tab="baby">
              <p>유아</p>
            </a>
          </li>
          <li className={tab === "element" ? "active" : ""}>
            <a href="#none" onClick={onChangeTab} data-tab="element">
              <p>초등</p>
            </a>
          </li>
          <li className={tab === "middle" ? "active" : ""}>
            <a href="#none" onClick={onChangeTab} data-tab="middle">
              <p>중등</p>
            </a>
          </li>
          <li className={tab === "high" ? "active" : ""}>
            <a href="#none" onClick={onChangeTab} data-tab="high">
              <p>고등</p>
            </a>
          </li>
          <li className={tab === "adult" ? "active" : ""}>
            <a href="#none" onClick={onChangeTab} data-tab="adult">
              <p>성인</p>
            </a>
          </li>
        </ul>
        <ul className="bottom-tab">
          {subTabList.map((o) => {
            return o.value.map((o, inx) => {
              return (
                <li
                  key={`tab-${inx}`}
                  className={`${o}` === subTab ? "active" : ""}
                >
                  <a href="#none" data-id={o} onClick={onChangeSubTab}>
                    {o}
                  </a>
                </li>
              );
            });
          })}
        </ul>
      </TabWrap>
      <ProductTrack>
        {subTab === "전체영역"
          ? getProductList().map((o, inx) => {
              return (
                <li
                  className="product-item"
                  key={`product-getProductList()-${inx}`}
                >
                  <a href="#none">
                    <img src={o.img} />
                    <p>{o.name}</p>
                  </a>
                </li>
              );
            })
          : filterList.map((o, inx) => {
              return (
                <li
                  className="product-item"
                  key={`product-getProductList()-${inx}`}
                >
                  <a href="#none">
                    <img src={o.img} />
                    <p>{o.name}</p>
                  </a>
                </li>
              );
            })}
      </ProductTrack>
    </ProductContWrap>
  );
};

const ProductContWrap = styled.section`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  max-width: 1320px;
  height: 685px;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 100px;
`;

const TitleWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  h2 {
    flex: 0 0 65px;
    font-size: ${(t) => t.theme.fontSize.title};
  }
  strong {
    flex: 0 0 35px;
    font-size: ${(t) => t.theme.fontSize.largeRegular};
    font-weight: ${(t) => t.theme.fontWeight.regular};
  }
`;

const TabWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .top-tab {
    flex: 0 0 80px;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 60px;
    > li {
      flex: 0 0 80px;
      width: 80px;
      display: flex;
      flex-flow: row nowrap;
      position: relative;
      margin: 0 15px;

      > a {
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;
        &::before {
          content: "";
          display: block;
          width: 80px;
          height: 80px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-repeat: no-repeat;
          background-position: center;
        }
        &::after {
          content: "";
          display: block;
          width: 80px;
          height: 80px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #fbf4f4;
          border-radius: 50%;
        }
        > p {
          flex: 0 0 auto;
          position: absolute;
          bottom: -25px;
          font-size: ${(t) => t.theme.fontSize.medium};
        }
      }
      &.active a p,
      &:hover a p {
        color: #fd0000;
      }
      &:nth-child(1) {
        a::before {
          background-image: url("assets/icon/baby.svg");
        }
        &.active a,
        &:hover a {
          &::before {
            background-image: url("assets/icon/baby_a.svg");
          }
        }
      }
      &:nth-child(2) {
        a::before {
          background-image: url("assets/icon/element.svg");
        }
        &.active a,
        &:hover a {
          &::before {
            background-image: url("assets/icon/element_a.svg");
          }
        }
      }
      &:nth-child(3) {
        a::before {
          background-image: url("assets/icon/middle.svg");
        }
        &.active a,
        &:hover a {
          &::before {
            background-image: url("assets/icon/middle_a.svg");
          }
        }
      }
      &:nth-child(4) {
        a::before {
          background-image: url("assets/icon/high.svg");
        }
        &.active a,
        &:hover a {
          &::before {
            background-image: url("assets/icon/high_a.svg");
          }
        }
      }
      &:nth-child(5) {
        a::before {
          background-image: url("assets/icon/adult.svg");
        }
        &.active a,
        &:hover a {
          &::before {
            background-image: url("assets/icon/adult_a.svg");
          }
        }
      }
    }
  }
  .bottom-tab {
    flex: 0 0 60px;
    display: flex;
    flex-flow: row nowrap;
    > li {
      flex: 0 0 auto;
      margin: 0 10px;
      > a {
        padding: 5px 10px;
        font-size: ${(t) => t.theme.fontSize.regular};
      }
      &:hover a {
        color: ${(t) => t.theme.color.red};
      }
      &.active {
        a {
          color: ${(t) => t.theme.color.red};
        }
      }
    }
  }
`;
const ProductTrack = styled.ul`
  width: 360px;
  max-height: 1320px;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg);
  transform-origin: right top;
  position: absolute;
  top: 330px;
  left: -360px;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
    background-color: ${(t) => t.theme.color.gray};
  }
  &::-webkit-scrollbar-track {
    width: 8px;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background-color: #ac9ae3;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  .product-item {
    height: 360px;
    width: 310px;
    margin: 0 10px;
    transform: rotate(90deg) translateX(360px);
    transform-origin: right top;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 290px;
        height: 290px;
        border-radius: 40px;
        margin-bottom: 10px;
        overflow: hidden;
      }
      p {
        flex: 0 0 auto;
        font-size: ${(t) => t.theme.fontSize.regular};
      }
    }
  }
`;
