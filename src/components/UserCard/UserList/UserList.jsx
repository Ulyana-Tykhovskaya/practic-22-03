import PropTypes from 'prop-types';
import UserCard from '../UserCard';
import styles from './UserList.module.css';

export default function UserList({ users, onDelete }) {
  return (
    <ul className={styles['user-list']}>
      {users.map(({ id, name, age, email, avatar }) => (
        <li key={id} className={styles['user-list-item']}>
          <UserCard
            id={id}
            name={name}
            age={age}
            email={email}
            avatar={avatar}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      email: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
