import styled from "styled-components";
export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
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
  .blog-div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
  .blog-sec {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.5rem;
    padding-bottom: 1rem;
    pointer-events: all;
    opacity: 1;
    transition: opacity 0.2s ease-in-out 0s;
  }
  .rev-btn {
    margin-right: 1rem;
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border: none;
    cursor: pointer;
  }
  .add-rev {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    margin-top: 0px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgb(255, 255, 255);
    opacity: 1;
    background: border-box rgb(237, 90, 107);
    border-color: rgb(237, 90, 107);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
      box-shadow 0.25s ease 0s;
    outline: none !important;
  }
  .rev-text {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-size: inherit;
    transition: transform 0.4s ease 0s;
  }
  .add {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    margin-top: 0px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgb(237, 90, 107);
    opacity: 1;

    border-color: rgb(28, 28, 28);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
      box-shadow 0.25s ease 0s;
    outline: none !important;
  }
  .btn {
    margin-right: 1rem;
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border: 1px solid rgb(28, 28, 28);
    cursor: pointer;
  }
  .img-item {
    height: 192px;
    width: 207px;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: transform 0.2s;
    border-radius: 20px;
  }
  .img-item:hover {
    transform: scale(1.1);
  }
`;
