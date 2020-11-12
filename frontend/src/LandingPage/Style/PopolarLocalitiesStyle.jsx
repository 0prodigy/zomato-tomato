import styled from "styled-components";
export const Wrapper = styled.div`
  .heading {
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-align: center;
  }
  .city-name {
    font-weight: 500;
    font-size: 3rem;
  }
  .text {
    margin: 0px;
    color: rgb(54, 54, 54);
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 400;
  }
  .list-body {
    width: 30%;
    position: relative;
    display: flex;
    justify-content: start;
  }
  .list-body:hover {
    box-shadow: 0 8px 6px -6px #e6e6e6;
  }
  .list-text {
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 0px;
    width: fit-content;
    max-width: 90%;
  }
  .icons {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 25px;
    height: 15px;
    color: rgb(28, 28, 28);
  }
`;
