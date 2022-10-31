import styled, { keyframes } from 'styled-components';

const LdsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const LdsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
  
`;

const LdsEllipsis3 = keyframes`
 0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
  
`;

export const Ellipsis = styled.div`
  margin: 0 auto;
  display: inline-block;
  position: absolute;
  right: 20px;
  width: 70px;
  height: 18px;
  & div {
    position: absolute;
    top: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4cc6f5;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    animation: ${LdsEllipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${LdsEllipsis3} 0.6s infinite;
  }
`;
