import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
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
  .item-img1 {
    width: 575px;
    height: 400px;
    transition: all 0.5s;
  }
  .item-img1:hover {
    transform: scale(1.02);
  }
  .item-img2 {
    width: 190px;
    height: 198px;
    transition: all 0.5s;
  }
  .item-img2:hover {
    transform: scale(1.02);
  }
  .img-sec1 {
    position: relative;
  }
  .img-div1 {
    width: 100%;
    display: flex;
    height: 380px;
  }
  .img-div2 {
    min-width: 64.4%;
    max-width: 100%;
    width: 62.4%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0px;
    overflow: hidden;
  }

  .img-div4 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
  }
  .img-1 {
    height: 100%;
    width: 100%;
    filter: brightness(0.95);
    transition: transform 0.5s ease-in-out 0s, filter 0.5s ease 0s;
    :hover {
      transform: scale(1.025);
    }
  }
  .img-sec2 {
    width: 100%;
    height: 100%;
    margin-left: 0.6rem;
    display: flex;
    flex-direction: column;
  }
  .img-div5 {
    min-width: 62.4%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0px 0px 0.3rem;
    overflow: hidden;
  }
  .img-div6 {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img-div7 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    background: linear-gradient(
        to right,
        rgb(248, 248, 248) 0%,
        rgb(255, 255, 255) 10%,
        rgb(248, 248, 248) 40%,
        rgb(248, 248, 248) 100%
      )
      no-repeat rgb(248, 248, 248);
    opacity: 0;
    transition: opacity 0.25s ease-out 0s;
    will-change: opacity;
    border-radius: inherit;
    animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
  }
  .img-2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    filter: brightness(0.95);
    transition: transform 0.5s ease-in-out 0s, filter 0.5s ease 0s;
    :hover {
      transform: scale(1.1);
    }
  }
  .img-div8 {
    min-width: 62.4%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0.3rem 0px 0px;
    overflow: hidden;
  }
  .img-div9 {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img-div10 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    background: linear-gradient(
        to right,
        rgb(248, 248, 248) 0%,
        rgb(255, 255, 255) 10%,
        rgb(248, 248, 248) 40%,
        rgb(248, 248, 248) 100%
      )
      no-repeat rgb(248, 248, 248);
    opacity: 0;
    transition: opacity 0.25s ease-out 0s;
    will-change: opacity;
    border-radius: inherit;
    animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
  }
  .img-3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.5s ease 0s, transform 0.5s ease 0s;
    :hover {
      transform: scale(1.1);
    }
  }
`;
