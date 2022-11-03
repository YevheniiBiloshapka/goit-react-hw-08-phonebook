import { Label, Input } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <Label htmlFor="">
      <p>Find contacts by name</p>
      <Input
        type="text"
        id="filter"
        placeholder="Enter name"
        onChange={onChange}
      ></Input>
    </Label>
  );
};
