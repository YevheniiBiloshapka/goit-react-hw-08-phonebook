import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
