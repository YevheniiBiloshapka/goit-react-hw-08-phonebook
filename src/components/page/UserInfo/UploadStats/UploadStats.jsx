import {
  Title,
  Statistics,
  StatList,
  Item,
  Label,
  Percentage,
} from './UploadStats.styled';
import data from 'services/data';

export const UploadStats = () => {
  return (
    <Statistics>
      <Title>Upload stats</Title>

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistics>
  );
};
