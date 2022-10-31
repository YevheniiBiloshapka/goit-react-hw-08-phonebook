import { Table, TBody, TColum } from './TransactionHistory.styled';
import transactions from 'services/transactions';

export const Transaction = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TColum>Type</TColum>
          <TColum>Amount</TColum>
          <TColum>Currency</TColum>
        </tr>
      </thead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </TBody>
    </Table>
  );
};
