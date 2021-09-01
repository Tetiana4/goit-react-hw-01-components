import { ListItem, Status, Image, Name } from "../FriendList/FriendList.styled";

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <ListItem key={id}>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};
FriendListItem.propTypes = {};
export default FriendListItem;
