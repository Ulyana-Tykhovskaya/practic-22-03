import { FaUsers, FaShoppingCart, FaComments, FaStar } from 'react-icons/fa';
import styles from './StatisticsItem.module.css';

const icons = {
  customers: <FaUsers size={30} />,
  orders: <FaShoppingCart size={30} />,
  reviews: <FaComments size={30} />,
  rating: <FaStar size={30} />,
};

export default function StatisticsItem({ total, title }) {
  return (
    <>
      {icons[total] || <FaStar size={30} />}
      <span className={styles.counter}>{total}</span>
      <p className={styles.text}>{title}</p>
    </>
  );
}
