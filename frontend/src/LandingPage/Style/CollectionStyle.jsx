import styled from "styled-components";
export const Wrapper = styled.div`
  .heading-div {
    font-size: 1.6rem;
  }
  .collection {
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin-top: 15px;
  }
  .text-div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
    font-size: 1rem;
  }
  .text {
    line-height: 1.4;
    font-weight: 300;
    color: rgb(54, 54, 54);
    font-size: 1.1rem;
    margin: 0px;
  }
  .link {
    text-decoration: none;
    display: block;
    background-color: transparent;
    font-weight: 300;
    color: rgb(245, 112, 130);
  }
  .link-text {
    color: rgb(236, 70, 84);
    display: inline-flex;
    padding: 0.3rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    line-height: 1;
    font-size: 1.2rem;
  }
  .bottom-right {
    position: absolute;
    bottom: 8px;
    left: 16px;
    color: white;
    font-size: 20px;
    font-weight: 400;
  }
`;
