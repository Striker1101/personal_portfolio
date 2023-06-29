import styled from "styled-components";

export const Anchor = styled.h4`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 19px;
  height: 60px;
  background-color: blue;
  color: wheat;
  border-radius: 10px;
  transition: transform ease;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0);
  a {
    color: wheat;
  }
  &:hover {
    transform: scale(0.9);
  }
`;
