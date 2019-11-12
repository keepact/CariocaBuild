import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  h2 {
    text-align: center;
    padding: 20px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
  }
`;

export const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
  }

  strong {
    font-size: 22px;
    margin-left: 10px;
  }
`;
