import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
  & h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;

    color: #1f3349;
    margin-bottom: 15px;
  }
`;

export const List = styled.ul`
  border-radius: 6px;
`;

export const ListItem = styled.li`
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

export const Error = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #f15353;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.16px;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #4cc6f5;
  }

  &::placeholder {
    color: #a8a8a8;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7f8e9d;
    margin-bottom: 8px;
  }
`;
