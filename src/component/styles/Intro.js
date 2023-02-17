import styled from "styled-components";

export const Intro = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => theme.colors.header};
  img {
    width: 350px;
    height: 350px;
    border-radius: 200px;
  }
  p,
  h1 {
    font-size: xx-large;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    p,
    h1 {
      font-size: x-large;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
