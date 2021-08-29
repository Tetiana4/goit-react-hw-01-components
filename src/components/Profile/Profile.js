import PropTypes from "prop-types";
import {
  Container,
  Description,
  Image,
  Name,
  List,
  Span,
} from "./Profile.styled";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Container class="profile">
      <Description class="description">
        <Image src={avatar} alt="Аватар пользователя" class="avatar" />
        <Name>{name}</Name>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <List>
        <li>
          <Span>Followers</Span>
          <Span>{stats.followers}</Span>
        </li>
        <li>
          <Span>Views</Span>
          <Span>{stats.views}</Span>
        </li>
        <li>
          <Span>Likes</Span>
          <Span>{stats.likes}</Span>
        </li>
      </List>
    </Container>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
