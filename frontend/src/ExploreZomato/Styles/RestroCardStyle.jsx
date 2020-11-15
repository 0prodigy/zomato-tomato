import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 400;
  }
  .sidebar {
    h5.form-check-label {
      cursor: "pointer";
    }
  }
  .search-div {
    background-color: #f3f3f3;
  }
  .card-heading-link {
    font-weight: 700;
    line-height: 20px;
    font-size: 24px;
    color: #cb202d;
  }
  .ratings-count {
    font-size: 13px;
    font-weight: 500;
    color: #1c1c1c;
  }
  .order-min {
    font-size: 14px;
  }
  .review-count {
    color: #696969;

    font-size: 12px;
  }
  .description {
    font-size: 13px;
  }
  .clear {
    clear: both;
  }
  .grey-text {
    color: grey;
  }
  .middot {
    font-size: 25px;
    margin-bottom: 0px;
    font-weight: 600;
  }
  nowrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .active {
    color: green;
    font-weight: 500;
  }
`;
