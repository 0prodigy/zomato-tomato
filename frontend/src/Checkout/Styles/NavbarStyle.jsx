import styled from "styled-components";
// const Wrapper = styled.div``;
export const Wrapper = styled.div`
  .navigation-shadow {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }
  .navbarContainer {
    padding: 0px;
    display: flex;
    align-items: center;
    > div {
      width: 100%;
    }
    .backButton {
      background-color: inherit;
      color: inherit;
      border: 0px;
    }
    .zomatoLogo {
      display: flex;
      justify-content: center;
    }
    .loginSignupDiv {
      display: flex;
      justify-content: flex-end;
    }
    .btn {
      height: 30px;
      display: flex;
      align-items: center;
      margin: 0px 15px;
      font-weight: 300;
      color: rgb(237, 90, 107);
      :hover {
        background-color: white;
        color: rgb(247, 77, 96);
      }
    }
    .navigationButton {
      padding: 0px 0.6rem;
      color: white;
      font-family: "Poppins";
      button {
        background: inherit;
        color: inherit;
        border: none;
        outline: none;
      }
    }
    .userDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      > span {
        margin-left: 8px;
        color: black;
      }
      button {
        margin-left: auto;
      }
    }
  }
`;
