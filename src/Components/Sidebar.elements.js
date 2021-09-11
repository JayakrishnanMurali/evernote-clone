import styled from "styled-components";

export const SidebarStyled = styled.div`
  z-index: 1000;
  height: 100vh;
  width: 15rem;
  outline: 1px solid var(--dark-gray-color);
  background: var(--primary-bg-color);
  color: var(--grey-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;

  .sidebar__userInfo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .sidebar__avatarIcon {
      font-size: 2.5rem;

      @media screen and (max-width: 960px) {
        font-size: 2rem;
      }
    }

    > h4 {
      font-size: 0.748rem;
      font-weight: 400;
      padding-bottom: 0.2rem;
      padding-left: 0.4rem;
      padding-right: 0.2rem;

      :hover {
        color: var(--white-color);
        transition: all 0.5s ease;
      }

      @media screen and (max-width: 960px) {
        display: none;
      }
    }

    .sidebar__downArrow {
      font-size: 1rem;

      @media screen and (max-width: 960px) {
        display: none;
      }
    }
  }

  .sidebar__searchBox {
    > input {
      width: 100%;
      border-radius: 4rem;
      height: 2.2rem;
      background: var(--secondary-bg-color);
      border: none;
      outline: none;
      color: var(--grey-color);
      position: relative;
      padding-left: 1.9rem;

      @media screen and (max-width: 960px) {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: transparent;
      }
    }

    .sidebar__searchIcon {
      position: absolute;
      display: inline-block;
      left: 1.5rem;
      margin-left: 0.3rem;
      margin-top: 0.48rem;
      font-size: 1.3rem;

      @media screen and (max-width: 960px) {
        display: none;
      }
    }
  }

  .sidebar__top {
    padding: 20px;
    > button {
      margin-top: 0.75rem;
      width: 100%;
      border-radius: 4rem;
      height: 2.2rem;
      background: var(--green-color);
      border: none;
      outline: none;
      color: var(--black-color);
      font-size: 1rem;
      font-weight: 200;

      :hover {
        background: var(--dark-green-color);
        transition: all 0.3s ease;
      }

      @media screen and (max-width: 960px) {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: transparent;
      }
    }
  }
  .sidebar__down {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.1px solid var(--dark-gray-color);

    .sidebar__whatsnew {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      > h3 {
        font-size: 0.918rem;
        font-weight: 400;
        margin-left: 0.1rem;

        @media screen and (max-width: 960px) {
          display: none;
        }
      }
      .sidebar__starIcon {
        font-size: 1.2rem;
        margin-bottom: 0.2px;

        @media screen and (max-width: 960px) {
          font-size: 1.5rem;
          position: relative;
        }
      }
    }
  }
  .sidebar__down {
    > h4 {
      font-size: 0.818rem;
      font-weight: 400;
      background: var(--blue-color);
      border-radius: 30%;
      width: 19px;
      text-align: center;
      color: var(--black-color);

      @media screen and (max-width: 960px) {
        position: absolute;
        left: 40px;
        bottom: 40px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    width: 4rem;
  }
`;

export const SidebarMenu = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1.8rem;
  > li {
    margin-bottom: 0.1rem;
    padding: 0.3rem 0;
    > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--grey-color);
      font-size: 0.918rem;
      > h4 {
        font-weight: 400;
        @media screen and (max-width: 960px) {
          display: none;
        }
      }
      .sidebar__homeIcon {
        font-size: 1.3rem;
        margin-right: 0.5rem;

        @media screen and (max-width: 960px) {
          font-size: 1.9rem;
        }
      }

      .sidebar__flashIcon {
        font-size: 1.1rem;
        margin-right: 0.5rem;
        background: var(--orange-color);
        color: var(--white-color);
        border-radius: 100%;
        padding: 2px;

        @media screen and (max-width: 960px) {
          font-size: 1.7rem;
        }
      }
    }
  }
`;
