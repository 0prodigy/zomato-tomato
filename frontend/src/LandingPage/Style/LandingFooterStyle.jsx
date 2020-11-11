import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
  }
  .bg-color {
    background: rgb(252, 252, 252);
  }
  .landingFooter-heading {
    margin: 0px 0px 3rem;
    color: rgb(54, 54, 54);
    font-size: 2.4rem;
    line-height: 4rem;
    font-weight: 500;
  }
  .landingFooter-tag {
    margin: 0px 0px 1.6rem;
    color: rgb(54, 54, 54);
    font-size: 1.7rem;
    line-height: 3.2rem;
    font-weight: 500;
  }
  .cuisines-Link {
    text-decoration: none;
    color: rgb(130, 130, 130);
    font-size: 0.98rem;
    line-height: 1.8;
    margin-right: 0.5rem;
  }
  .cuisines-bullet {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: rgb(130, 130, 130);
    border-radius: 50%;
    margin-right: 0.1rem;
    margin-left: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .restro-marginTop {
    margin-top: 80px;
  }
  .topRestroChain-Link {
    display: inline-block;
    text-align: left;
    text-decoration: none;
    color: rgb(130, 130, 130);
    margin-bottom: 1.2rem;
    width: 20%;
    font-size: 1.2rem;
    line-height: 1.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
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
`;
