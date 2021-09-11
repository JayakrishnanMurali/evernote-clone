import styled from "styled-components";

export const SidebarStyled = styled.div`
  height: 100vh;
  width: 15rem;
  background: var(--primary-bg-color);
  color: var(--grey-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  .sidebar__userInfo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .sidebar__avatarIcon {
      font-size: 2.5rem;
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
    }

    .sidebar__downArrow {
      font-size: 1rem;
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
    }

    .sidebar__searchIcon {
      position: absolute;
      display: inline-block;
      left: 1.5rem;
      margin-left: 0.3rem;
      margin-top: 0.48rem;
      font-size: 1.3rem;
    }
  }

  .sidebar__top {
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
    }
  }
`;

export const SidebarMenu = styled.ul``;
