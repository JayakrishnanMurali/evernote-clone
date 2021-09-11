import styled from "styled-components";

export const HomePageStyled = styled.section`
  width: 100%;
  background: var(--primary-bg-color);
  color: var(--off-white-color);
  margin-left: 15rem;
  overflow-y: scroll;
  height: 100vh;

  .homepage__top {
    height: 65vh;
  }

  .homepage__gradient {
    height: 26rem;
    background-image: var(--black-fade-gradient);
  }

  .homepage__greetings {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    cursor: default;
    > h3 {
      font-weight: 400;
    }

    > h4 {
      font-weight: 600;
      font-size: 0.718rem;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 960px) {
    margin-left: 4rem;
  }
`;
