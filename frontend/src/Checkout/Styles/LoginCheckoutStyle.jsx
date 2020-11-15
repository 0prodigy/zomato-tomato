import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    fotn-weight: 300;
    filter: brightness(1);
  }
  .card-border {
    border: 1px solid white;
  }
  .card-text {
    font-size: 14px;
    color: rgb(193, 193, 193);
    font-weight: 200;
  }
  .order-text {
    line-height: 1.5;
    margin: 0px 0px 1rem;
    font-size: 1rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: rgb(79, 79, 79);
    font-weight: 500;
  }
  .menu-text {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    font-weight: 00;
    color: rgb(54, 54, 54);
  }
  .loc-text {
    line-height: 1.5;
    margin: 0px;
    font-size: 0.6rem;
    color: rgb(54, 54, 54);
  }
  .veg-border {
    border: 1px solid green;
    height: 12px;
    width: 12px;
    margin-left: 0px;
    padding: 1px;
  }
  .veg-color {
    background-color: green;
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }
  .instruction-text{
       border-bottom:1px dashed black;
       align-items:center
       font-size: 0.6rem;
  }
  .offer-text{
       color:red
   
  }
  .heading-text{
      font-size:15px;
  }
  .cost{
      font-size:12px;
  }
  .card-outline{
      border:1px dashed red
  }

  .loginBtn{
    padding: 8px 0px;
    font-weight: 300;
    width: 100%;
    margin: 0px 8px;
    outline: none;
    background-color: white;
    color:  rgb(237, 90, 107);
  }

  .signupBtn{
    padding: 8px 0px;
    font-weight: 300;
    width: 100%;
    margin: 0px 8px;
    outline: none;
    background-color: rgb(237, 90, 107);
    color: white;
    :hover{
      background-color: rgb(247, 77, 96);
    }
  }

  .addNewAddress{
    :hover{
      cursor: pointer;
    }
  }
`;
