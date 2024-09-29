import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'
import friends from '../../friends.json'

const FriendList = () => {
  return (
  //   <ul className={styles.list}>
  //     <li className={styles.item}>
  //       <FriendListItem />
	//     </li>
  //   </ul>
  // )
  <ul className={styles.list}>
    <li className={styles.item}>
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
    </li>
  </ul>
  )
}

export default FriendList