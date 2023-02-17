import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  background: ${({ theme }) => theme.colors.nav};

  ul {
    display: flex;
    gap: 9px;
    list-style: none;
  }
  a {
    color: wheat;
  }
`;

export const Button = styled.button`
  border: transparent;
  color: wheat;
  background-color: transparent;
  font-size: large;
`;
