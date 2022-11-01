import styled from "styled-components";

const LoaderThumb = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;

const TableStyled = styled.table`
  margin: 25px auto 0 auto;
  border-collapse: collapse;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  color: #fff;
`;

const TableThStyled = styled.th`
  padding: 15px;
`;

const TableTrHeadStyled = styled.tr`
  background: linear-gradient(45deg, #5f2c82, #49a09d);
  height: 50px;
`;

const TableHeadNumberThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLetterThumb = styled.div`
  margin-left: 10px;
`;

const IconNumberThumb = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Icon = styled.i`
  opacity: 50%;
`;

const TableTrStyled = styled.tr`
  background: linear-gradient(45deg, #5f2c82, #49a09d);
  &:nth-child(odd) {
    background: linear-gradient(45deg, #49a09d, #5f2c82);
  }
`;

const TableTdStyled = styled.td`
  text-align: center;
  padding: 15px;
`;

export {
  IconLetterThumb,
  Icon,
  TableHeadNumberThumb,
  IconNumberThumb,
  LoaderThumb,
  TableStyled,
  TableTrHeadStyled,
  TableTrStyled,
  TableThStyled,
  TableTdStyled,
};
