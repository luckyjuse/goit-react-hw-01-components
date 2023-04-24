import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 80%;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 10px;
  border-collapse: collapse;
  border-style: hidden;
  background-color: rgb(235, 235, 235);
  overflow: hidden;
`;

export const TransactionThead = styled.thead``;

export const TransactionTbody = styled.tbody``;

export const TransactionTh = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  background-color: #04aa6d;
  border-right: 1px solid #ddd;
  :last-child {
    border-right: none;
  }
`;

export const TransactionTr = styled.tr`
  :hover {
    background-color: #ddd;
  }
`;

export const TransactionTd = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
`;
