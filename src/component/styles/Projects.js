import styled from "styled-components";

export const ProjectsStyled = styled.article`
  padding-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-bottom: 10%;
  header,footer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  main {
    padding-top: 3%;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-wrap: wrap;
  }
`;
