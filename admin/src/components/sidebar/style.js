import styled from "styled-components";

export const SidebarWrapper = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;

  .top {
    padding-top: 8px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #191970;
      font-family: "Ubuntu";
    }
  }

  hr {
    height: 0;
    border: 0.5px solid rgb(230, 227, 227);
  }

  .center {
    padding-left: 10px;
    padding-right: 10px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #e0ffff;
        }

        .icon {
          font-size: 18px;
          color: #191970;
        }

        span {
          font-size: 14px;
          font-weight: 600;
          color: #191970;
          margin-left: 10px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 10px;

    .colorOption {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #191970;
      cursor: pointer;
      margin: 5px;

      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;
