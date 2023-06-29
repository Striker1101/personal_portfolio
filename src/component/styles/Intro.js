import styled from "styled-components";

export const Intro = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;

  background: ${({ theme }) => theme.colors.header};
  img {
    width: 350px;
    height: 350px;
    border-radius: 200px;
    box-shadow: 5px 4px 3px 2px lightskyblue;
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
    img {
      width: 300px;
      height: 300px;
      border-radius: 200px;
    }
  }
`;
