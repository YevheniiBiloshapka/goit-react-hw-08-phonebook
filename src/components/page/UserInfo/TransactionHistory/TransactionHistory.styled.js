import styled from 'styled-components';

export const Table = styled.table`
  overflow: hidden;
  position: relative;
  border-spacing: 0px;
  border-collapse: collapse;

  letter-spacing: 0.03em;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
  & thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export const TColum = styled.th`
  width: 33.3333%;
  padding: 10px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #ffffff;
  background: #4cc6f5;
  border-right: 0.5px solid #c5c5c5;
  &:last-child {
    border-right: none;
  }
`;

export const TBody = styled.tbody`
  & td {
    padding: 10px;
    border-right: 0.5px solid #c5c5c5;
    &:last-child {
      border-right: none;
    }
  }

  & tr:nth-child(2n) {
    background: #ecf1f3;
  }
  & tr:hover {
    background-color: #c8effe;
  }
`;
