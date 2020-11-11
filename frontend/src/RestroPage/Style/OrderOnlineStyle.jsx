import styled from "styled-components";
export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
  }
  .online-div1 {
    width: 100%;
  }
  .online-div2 {
    display: flex;
  }
  .side-div-left {
    position: sticky;
    top: calc(190px + 90px);
    width: 16rem;
    height: 100%;
    flex-shrink: 0;
    max-height: calc(100vh - 224px);
  }
  .side-div-category-active {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    cursor: pointer;
    padding: 0.8rem 2rem;
    font-weight: 500;
    color: rgb(237, 90, 107);
    border-right: 3px solid rgb(237, 90, 107);
    background: linear-gradient(90deg, rgb(255, 255, 255), rgb(247, 235, 236));
  }
  .side-div-category {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    cursor: pointer;
    padding: 0.8rem 2rem;
    font-weight: 500;
    border-right: 3px solid rgb(237, 90, 107);
  }
  .side-div-right {
    padding-left: 2rem;
    flex: 1 1 0%;
    min-width: 50%;
    border-left: 1px solid rgb(232, 232, 232);
  }
  .order-online {
    font-weight: 400;
  }
  .order-para {
    color: rgb(237, 90, 107);
  }
  .coupons-div1 {
    position: relative;
    width: 15rem;
    height: 3rem;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    flex-grow: 0;
  }
  .coupons-div2 {
    height: 100%;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 6px;
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    overflow: hidden;
  }
  .coupons-text-left {
    width: 5rem;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.6rem;
    color: rgb(245, 112, 130);
    text-align: center;
    font-weight: 600;
  }

  .coupons-bar {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 1.4rem;
    margin-left: 5.1rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-shadow: rgb(255, 255, 255) 0px 5px 0px;
  }

  .coupons-bar-mid1 {
    height: 0.7rem;
    width: 100%;
    border-radius: 0px 0px 2rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgb(232, 232, 232) rgb(232, 232, 232);
    border-image: initial;
  }
  .coupons-bar-mid2 {
    height: 0.7rem;
    width: 100%;
    border-radius: 0px 0px 2rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgb(232, 232, 232) rgb(232, 232, 232);
    border-image: initial;
    transform: rotate(180deg);
    box-shadow: rgba(54, 54, 54, 0.06) 0px -2px 2px inset;
    background: rgb(255, 255, 255);
  }
  .main-footer {
    margin-top: 0px;
    width: 100%;
  }
  .logo-section {
    align-items: center;
    width: 100%;

    margin-bottom: 4rem;
  }
  .footer-div {
    max-width: 110rem;
    width: 110rem;
    padding: 2px;
    position: relative;
  }
  .footer-logo {
    margin-top: 50px;
    height: 28px;
  }

  .footer-div {
    position: relative;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 19.3333%;
    padding: 0px;
  }
  .footer-heading: {
    font-weight: 500 !important;
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin: 0px 0px 1.2rem;
  }
  .footer-Link {
    text-decoration: none;
    color: rgb(77, 74, 74);
    font-size: 0.9rem;
    margin: 3.8px;
  }
  .social-link {
    margin-left: 0.6rem;
  }
  .icon-tag {
    text-decoration: none;
    margin-right: 0.8rem;
    color: white;
    height: 10px;
  }
  .social-icons {
    align-item: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
  }
  .icon {
    height: 15px;
    border-radius: 50%;
  }
  .app-store {
    height: 50px;
    width: 150px;
  }
  .policy {
    font-size: 0.85rem;
    color: rgb(130, 130, 130);
    line-height: 1.7rem;
    margin-top: 2.3rem;
  }

  .loc-near-heading {
    line-height: 1.2;
    color: rgb(28, 28, 28);
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0px 0px 1rem;
  }
  .loc-near-names {
    margin-bottom: 2.4rem;
  }
  .loc-near-link {
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
    word-break: break-all;
    color: rgb(156, 156, 156);
  }
`;
