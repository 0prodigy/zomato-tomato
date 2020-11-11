import styled from "styled-components";
export const BannerWrapper = styled.div`
  height: calc(100vh - 35rem);
  min-height: 30rem;
  max-height: 57rem;
  width: 100%;
  position: relative;
  > .landingPageImageContainer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    > .landingPageImage {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-size: cover;
      transform: scale(1.3);
    }
  }

  .contentWrapper {
    position: absolute;
    bottom: calc(50% - 5rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .zomatoImageContainer {
      height: 65px;
      width: 18rem;
      position: relative;

      .zomatoImage {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-size: contain;
      }
    }

    .description {
      color: white;
      margin-top: 2rem;
      text-align: center;
      font-weight: 400;
      font-family: "Poppins";
    }
  }
`;
