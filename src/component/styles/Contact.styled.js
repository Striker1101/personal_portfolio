import styled from "styled-components";

export const ContactStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.footer};
  color: wheat;
  img {
    width: 350px;
    height: 350px;
    border-radius: 200px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    list-style: none;
    padding-bottom: 10px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 10px;
    gap: 10px;
  }
  input:focus {
    background-color: grey;
    color: wheat;
  }
  textarea:focus {
    background-color: grey;
    color: wheat;
  }
  textarea {
    width: 90vw;
    border-radius: 5px;
  }
  a {
    color: wheat;
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
  }
`;

export const Input = styled.input`
  width: 90vw;
  height: 40px;
  border-radius: 8px;
`;

export const Click = styled.input`
  width: 100px;
  height: 30px;
  color: wheat;
  background-color: ${({ color }) => color};
  border-radius: 8px;
`;
