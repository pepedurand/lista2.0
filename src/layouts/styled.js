import styled from "@emotion/styled";

export const FormsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormsDiv = styled.div`
  margin: 100px;
  @media (max-width: 800px) {
    margin: 50px;
  }
`;

export const ImageDiv = styled.div`
  background-color: #003c7e;
  height: 100vh;
  width: 100vh;
  @media (max-width: 800px) {
    display: none;
  }
`;
