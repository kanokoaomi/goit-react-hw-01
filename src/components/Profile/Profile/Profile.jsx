import styles from './Profile.module.css'

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;

  // 
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} width="137" src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{tag}</p>
        <p className={styles.info}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.items}>
          <span>Followers</span>
          <span><b>{stats.followers}</b></span>
        </li>
        
        <li className={styles.items}>
          <span>Views</span>
          <span><b>{stats.views}</b></span>
        </li>

        <li className={styles.items}>
          <span>Likes</span>
          <span><b>{stats.likes}</b></span>
        </li>
      </ul>
    </div>
  )
}

export default Profile;