import user from "../data.json/user.json";
import statisticalData from "../data.json/statistical-data.json";
import friends from "../data.json/friends.json";
import transactions from "../data.json/transaction.json";
import Profile from "../components/Profile/Profile";
import Statistics from "../components/Statistics/Statistics";
import FriendList from "../components/FriendList/FriendList";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
