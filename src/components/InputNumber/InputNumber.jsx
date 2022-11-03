import { Field } from 'formik';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

const Input = styled(MaskedInput)`
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
const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const InputNumber = () => {
  return (
    <>
      <Field name="number">
        {({ field }) => (
          <>
            <Input
              type="text"
              {...field}
              mask={phoneNumberMask}
              id="phone"
              placeholder="Enter your phone number"
            />
          </>
        )}
      </Field>
    </>
  );
};
