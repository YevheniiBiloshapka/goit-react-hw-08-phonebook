import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  gap: 9px;
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 16px;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7f8e9d;
  padding-right: 20px;
`;
export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;

  color: #0e1721;
`;
export const ProfileDescr = styled.p`
  margin-bottom: 0;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 544px;
  overflow: hidden;
  border-radius: 8px;

  list-style: none;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 18px 17px;

  min-width: 100px;
  background: #e8fbff;
  border-bottom: 5px solid #85c3ff;
  &:nth-child(2) {
    background: #fff5ec;
    border-bottom: 5px solid #f2994a;
  }
  &:nth-child(3) {
    background: #ffe8e8;
    border-bottom: 5px solid #ec3a3a;
  }
  &:nth-child(4) {
    background: #e8ffe8;
    border-bottom: 5px solid #3aec4c;
  }
  &:nth-child(2) span::after {
    background: #f2994a;
  }
  &:nth-child(3) span::after {
    background: #ec3a3a;
  }
  &:nth-child(4) span::after {
    background: #3aec4c;
  }
`;

export const Label = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 15px;

  color: #7f8e9d;
  &::after {
    content: ' ';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    background-color: #85c3ff;
    top: 5px;
    left: 0;
  }
  &:nth-child(2) &::after {
    background-color: #f2994a;
  }
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 30px;
  line-height: 137%;

  color: #313541;
`;
