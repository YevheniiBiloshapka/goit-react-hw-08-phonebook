import styled from 'styled-components';
export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ItemList = styled.ul`
  border-radius: 6px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 16px;
  background: #ffffff;
  border-bottom: 1px solid #c5c5c5;

  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.03em;
  color: #1f3349;
  font-weight: 600;
  & span {
    font-weight: 400;
  }
  &:hover {
    background-color: #daf5ff;
  }
  &:last-child {
    border: none;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0px;
  color: #1f3349;
  background: none;

  & svg {
    height: 16px;
    width: 16px;
  }
  &:hover {
    color: #2b97c2;
  }
`;
