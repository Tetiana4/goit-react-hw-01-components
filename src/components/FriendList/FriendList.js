import PropTypes from "prop-types";
import { List, ListItem, Image, Name, Status } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map((item) => (
        <ListItem key={item.id}>
          <Status>{item.isOnline}</Status>
          <Image src={item.avatar} alt={item.name} width="48" />
          <Name>{item.name}</Name>
        </ListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
