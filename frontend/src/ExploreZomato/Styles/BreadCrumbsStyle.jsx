import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
  }
  .crumb-margin {
    margin-top: 80px;
    width: 100%;
    height: 28px;
    line-height: 23px;
    overflow: hidden;
  }
  .breadcrumb {
    background-color: white;
    margin-bottom: 0px;
  }
  .item {
    color: rgb(130, 130, 130);
    font-size: 14px;
  }
  .active {
    color: rgb(176, 172, 172);
  }
`;
