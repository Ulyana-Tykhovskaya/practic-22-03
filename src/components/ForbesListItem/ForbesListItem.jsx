import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import styles from './ForbesListItem.module.css';

export default function ForbesListItem({ avatar, name, capital, isIncrease }) {
  const icon = isIncrease ? <FcBullish /> : <FcBearish />;

  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} /> {icon}
      </span>
    </div>
  );
}
