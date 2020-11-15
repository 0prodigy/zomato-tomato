import styled from "styled-components";

export const Wrapper = styled.div`
  .card-focus {
    transition: transform 0.2s;
  }
  .card-focus:hover {
    transform: scale(1.055);
  }
  .card-body {
    width: 100%;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    height: fit-content;
    position: absolute;
    bottom: 0px;
    text-align: center;
    background-color: white;
  }
`;
