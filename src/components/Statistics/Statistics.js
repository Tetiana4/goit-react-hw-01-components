import PropTypes from "prop-types";
import { Container, Title, List, ListItem, Span } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <Container>
      <Title>Upload stats</Title>

      <List>
        {stats.map((item) => (
          <ListItem key={item.id} label={item.label}>
            <Span Type={item.label}>{item.label}</Span>
            <Span>{item.percentage}%</Span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  tittle: PropTypes.string,
  stats: PropTypes.array.isRequired,
  //   label: PropTypes.string.isRequired,
  //   percentage: PropTypes.number.isRequired,
};
