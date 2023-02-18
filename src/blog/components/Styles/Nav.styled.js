import styled from "styled-components";

export const NavStyled = styled.nav`
  max-width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  height: 8vh;

  background-color: ${({ theme }) => theme.colors.nav};
`;
