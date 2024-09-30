import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem.jsx'
import friends from '../../friends.json'

const FriendList = () => {
  return (
  <ul className={styles.list}>
      {friends.map((friend) => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          )
        })
      }
  </ul>
  )
}

export default FriendList