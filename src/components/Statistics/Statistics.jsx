import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem.jsx/StatisticsItem';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={styles.item}>
            <StatisticsItem total={total} title={title} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
