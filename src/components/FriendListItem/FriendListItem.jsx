import styles from './FriendListItem.module.css'

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <li>
      <div className={styles.item}>
        <img className={styles.image} src={avatar} alt="Avatar" width="48" />
        <p className={styles.name}>{name}</p>
        <p className={`${isOnline ? styles.online : styles.offline}`}>
          {isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </li>
  )
}

export default FriendListItem