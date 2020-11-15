import styled from "styled-components";
// const Wrapper = styled.div``;
export const Wrapper = styled.div`
  .navigation-cont {
    background-color: #fff;
    padding: 0 40px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 15px;
    display: block;
  }
  ,
  .navigation-content {
    margin: 0 auto;
    padding: 0;
    height: 38px;
    display: block;
    font-size: 15px;
  }

  .left-content {
    float: left;
    height: 100%;
  }
  .mobile-link {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 5px 10px;
    font-weight: 400;
    background: transparent;
    color: #33373d;
  }

  .mobile-link:hover {
    text-decoration: none;
  }

  .right-content {
    float: right;
    height: 100%;
  }
  .cart-link {
    float: left;
  }

  .table-link {
    float: left;
  }
  .zomato-pro {
    float: left;
  }
  .icon {
    height: 22px;
  }
`;
