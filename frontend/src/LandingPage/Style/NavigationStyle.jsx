import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: relative;
  padding: 0px;
  z-index: 1;
  .mobileNavigation {
    display: none;
  }
  .defaultNavigation {
    width: 100%;
    list-style: none;
    margin: 0;
    max-width: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    padding: 1.7rem 0px;

    > .zomatoLogo {
      position: absolute;
      left: 0px;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      max-width: 35rem;
    }

    .navigationButton:nth-last-child(2) {
      margin-right: 12px;
    }

    > .navigationButton {
      padding: 0px 0.6rem;
      color: white;
      font-family: "Poppins";

      button {
        background: inherit;
        color: inherit;
        border: none;
        outline: none;
      }

      :hover {
        cursor: pointer;
      }
    }

    .userDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > span {
        margin-left: 8px;
      }
      button {
        margin-left: auto;
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .mobileNavigation {
      display: block;
    }
    .defaultNavigation {
      display: none;
    }
  }
`;
