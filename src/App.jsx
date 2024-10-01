import Profile from './components/Profile/Profile/Profile.jsx'
import FriendList from './components/FriendList/FriendList.jsx'
import friends from './friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from "./transactions.json";

const userData = {
  username: "Jacques Gluke",
  tag: "@jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App