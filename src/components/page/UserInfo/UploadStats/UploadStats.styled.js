import styled from 'styled-components';

export const Statistics = styled.section`
  /* width: 325px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  padding: 16px;
  color: #1f3349;
`;

export const StatList = styled.ul`
  display: flex;
  & li:nth-child(1) {
    background-color: #4cc6f5;
  }
  & li:nth-child(2) {
    background-color: #d88ea9;
  }
  & li:nth-child(3) {
    background-color: #a03df6;
  }
  & li:nth-child(4) {
    background-color: #e54c65;
  }
  & li:nth-child(5) {
    background-color: #20b8c2;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2px;

  width: 130px;
  height: 46px;
  /* background-color: ${() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }}; */
`;
export const Label = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;
export const Percentage = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
