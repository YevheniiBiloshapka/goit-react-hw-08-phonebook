import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Box = styled.div`
  padding: 20px;
  min-width: 328px;
  border-radius: 8px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  & h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #1f3349;
    margin-bottom: 15px;
  }
`;
export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7f8e9d;
    margin-bottom: 8px;
  }
`;

export const Input = styled(Field)`
  background: #f4f4f3;
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

export const Error = styled.span`
  margin-top: 6px;
  font-size: 12px;
  color: #fa7575;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 0px;
  margin-top: 10px;

  background: #4cc6f5;
  border-radius: 6px;
  border: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;

  color: #ffffff;

  &:hover,
  &:focus {
    background: #2b97c2;
  }
`;
