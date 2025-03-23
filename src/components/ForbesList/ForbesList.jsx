import PropTypes from 'prop-types';
import styles from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

export default function ForbesList({ list }) {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleTop}>Forbes</span>
          <span className={styles.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={styles.list}>
        {list.map(({ id, name, capital, avatar, isIncrease }) => (
          <li key={id} className={styles.item}>
            <ForbesListItem
              id={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

ForbesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isIncrease: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
