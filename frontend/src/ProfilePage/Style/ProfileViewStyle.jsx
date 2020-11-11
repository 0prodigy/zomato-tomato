import styled from "styled-components";
export const Wrapper = styled.div`
  * {
    font-family: Poppins;
  }
  .profile {
    position: relative;
    height: 250px;
    overflow: hidden;
    top: 100;
  }
  .profile-background {
    position: relative;
    width: 1100px;
  }
  .profile-image {
    position: absolute;
    top: 70px;
    left: 60px;
    border-radius: 50%;
    border: 5px solid white;
    height: 150px;
  }
  .profile-text-div {
    position: absolute;
    height: 100px;
    top: 140px;
    left: 750px;
    color: white;
    padding: 8px;
    font-weight: 400;
    font-size: 20px;
  }
  .reviews {
    border-right: 1px solid white;
    margin-right: 5px;
    margin-left: 5px;
    padding: 8px;
  }
  .photos {
    border-right: 1px solid white;
    margin-right: 5px;
    padding: 8px;
  }
  .followers {
    margin-left: 5px;
    padding: 8px;
  }
  .profile-name {
    color: white;
    position: absolute;
    top: 135px;
    left: 230px;
  }
  .profile-location {
    color: white;
    position: absolute;
    top: 160px;
    left: 230px;
    font-size: 13px;
  }
`;
