import { Wrapper } from './UserInfo.styled';
import { Profile } from './profileSocial/profileSocial';
import { UploadStats } from './UploadStats/UploadStats';
import { Transaction } from './TransactionHistory/TransactionHistory';

export const UserInfo = () => {
  return (
    <>
      <Wrapper>
        <Profile />
        <UploadStats />
      </Wrapper>
      <Transaction />
    </>
  );
};
