import styled from "styled-components";

export const ProductContainer = () => {
  return (
    <ProductContWrap>
      <TitleWrap>
        <h2>Product</h2>
        <strong>지금 우리아이에게 필요한 눈높이는?</strong>
      </TitleWrap>
      <TabWrap>
        <ul className="top-tab">
          <li>
            <a href="#none">
              <p>유아</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <p>초등</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <p>중등</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <p>고등</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <p>성인</p>
            </a>
          </li>
        </ul>
        <ul className="bottom-tab">
          <li>
            <a href="#none">전체영역</a>
          </li>
          <li>
            <a href="#none">언어영역</a>
          </li>
          <li>
            <a href="#none">수리영역</a>
          </li>
          <li>
            <a href="#none">외국어영역</a>
          </li>
          <li>
            <a href="#none">과학영역</a>
          </li>
        </ul>
      </TabWrap>
      <ProductTrack>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book1.png" />
            <p>국어</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book2.png" />
            <p>수학</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book3.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book4.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book5.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book2.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book1.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book5.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book4.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book3.png" />
            <p>어쩌구</p>
          </a>
        </li>
        <li className="product-item">
          <a href="#none">
            <img src="assets/img/book/book1.png" />
            <p>어쩌구</p>
          </a>
        </li>
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
  margin: 20px 0 10px;
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
      &:hover a p {
        color: #fd0000;
      }
      &:nth-child(1) {
        a::before {
          background-image: url("assets/icon/baby.svg");
        }
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
    width: 0px;
    height: 0px;
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
