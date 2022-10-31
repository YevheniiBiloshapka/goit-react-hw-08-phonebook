import user from 'services/user.json';
import {
  Card,
  ProfileDescr,
  Description,
  Avatar,
  Name,
  Stats,
  StatsItem,
  Label,
  Quantity,
  Box,
} from './profileSocial.styled';

const { username, tag, location, avatar, stats } = user;
export const Profile = () => {
  return (
    <>
      <Card key="username">
        <Description>
          <Avatar src={avatar} alt="User avatar" className="avatar" />
          <Box>
            <Name>{username}</Name>
            <ProfileDescr>@{tag}</ProfileDescr>
            <ProfileDescr>{location}</ProfileDescr>
          </Box>
        </Description>
      </Card>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Contacts</Label>
          <Quantity>{13}</Quantity>
        </StatsItem>
      </Stats>
    </>
  );
};
