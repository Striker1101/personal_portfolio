import styled from "styled-components";

export const HomepageStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-direction: column;
    padding-top: 20px;
  }
`;
export const Line = styled.hr`
  transform: rotate(4deg);
  width: 4px;
  height: 30px;
`;

export const GenreStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  border-left: transparent;
  gap: 3px;
  border-top: 2px dashed;
  border-bottom: 2px dashed;
  padding: 10px 0;
`;
