// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Profile from "../components/Profile/Profile";
import user from "../components/user.json";
import statisticalData from "../components/statistical-data.json";
import Statistics from "../components/Statistics/Statistics";
import friends from "../components/friends.json";
import FriendList from "../components/FriendList/FriendList";
import transactions from "../components/transaction.json";
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
      {/* <Statistics stats={statisticalData.stats} /> */}
    </Container>
  );
}
