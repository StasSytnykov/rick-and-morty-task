import styled from "styled-components";

const LoaderThumb = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;

const TableStyled = styled.table`
  margin: 0 auto;

  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableThStyled = styled.th`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);

  border: 1px solid orange;
`;

const TableTdStyled = styled.td`
  text-align: center;
  border: 1px solid orange;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export { LoaderThumb, TableStyled, TableThStyled, TableTdStyled };
