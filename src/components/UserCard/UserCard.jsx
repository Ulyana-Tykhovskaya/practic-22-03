import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

export default function UserCard({
  id,
  name,
  age = 'Не указан',
  email = 'Нет почты',
  avatar = 'https://randomuser.me/api/portraits/men/75.jpg',
  onDelete,
}) {
  return (
    <div className={styles['user-card']}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h3 className={styles['user-info']}>{name}</h3>
      <p className={styles['user-info']}>Возраст: {age}</p>
      <p className={styles['user-info']}>Email: {email}</p>
      <button className={styles['user-button']} onClick={() => onDelete(id)}>
        Удалить
      </button>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  email: PropTypes.string,
  avatar: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
