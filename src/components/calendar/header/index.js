import styles from './styles.module.scss';
import next from './chevron-right.svg';
import prev from './chevron-left.svg';

const Header = ({ month, year, onNext, onPrev }) => {
  return (
    <div className={styles.header}>
      <h1>
        {month} {year}
      </h1>

      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={onPrev}>
          <img src={prev} alt='Previous Month' />
        </button>
        <button className={styles.actionButton} onClick={onNext}>
          <img src={next} alt='Next Month' />
        </button>
      </div>
    </div>
  );
};

export default Header;
