import PropTypes from 'prop-types';
import { FriendListLi, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListLi>
      <FriendStatus active={isOnline} />
      <img src={avatar} alt={name} width="38" />
      <p>{name}</p>
    </FriendListLi>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
