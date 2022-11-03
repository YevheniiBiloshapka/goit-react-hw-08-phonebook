import {
  selectorEmail,
  selectorName,
} from 'components/redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import user from 'services/user.json';
import {
  Card,
  ProfileDescr,
  Description,
  Avatar,
  Name,
  StatsList,
  StatsItem,
  Label,
  Quantity,
  Box,
} from './profileSocial.styled';
import { randomAvatar } from 'components/randomAvatar/randomAvatar';

export const Profile = () => {
  const name = useSelector(selectorName);
  const email = useSelector(selectorEmail);
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <Card key="username">
        <Description>
          <Avatar src={randomAvatar} alt="User avatar" className="avatar" />
          <Box>
            <Name>{name}</Name>
            <ProfileDescr>{email}</ProfileDescr>
          </Box>
        </Description>
      </Card>
      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{user.stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Contacts</Label>
          <Quantity>{contacts.length}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{user.stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </>
  );
};
