import styled from "styled-components";

export const InfoContainer = () => {
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
              <li>
                <a>
                  <span></span>
                  <p>온라인으로</p>
                </a>
              </li>
              <li>
                <a>
                  <span></span>
                  <p>선생님과 집에서</p>
                </a>
              </li>
              <li>
                <a>
                  <span></span>
                  <p>교재만 받기</p>
                </a>
              </li>
              <li>
                <a>
                  <span></span>
                  <p>공부방에서</p>
                </a>
              </li>
              <li>
                <a>
                  <span></span>
                  <p>러닝센터에서</p>
                </a>
              </li>
            </ul>
          </TabWrap>
        </LeftArea>
        <RightArea>
          <div className="text-wrap">
            <span>온라인으로</span>
            <p>
              비대면 온라인학습으로 시간과 장소에 구애 없이선생님과 학습할 수
              있는 온라인학습시스템 태블릿으로 공부하는 AI스마트학습 시스템
            </p>
          </div>
          <div className="img-wrap"></div>
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
      > a {
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        > span {
          flex: 1 1 auto;
          width: 70px;
          /* background-color: ${(t) => t.theme.color.gray}; */
          background-color: #ccc;
          border-radius: 50%;
          margin-bottom: 9px;
        }
        > p {
          flex: 0 0 auto;
          word-break: keep-all;
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
    top: 50%;
    right: 350px;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0px 2px 20px ${(t) => t.theme.color.shadow};
    padding: 25px 20px;
    width: 350px;
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
