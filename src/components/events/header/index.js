import Button from '../../button';
import styles from './styles.module.scss';
import next from '../../../icons/chevron-right.svg';
import prev from '../../../icons/chevron-left.svg';

const Header = ({ selectedDate, onPrev, onNext }) => {
  return (
    <div className={styles.header}>
      <h1>{selectedDate.toDateString()}</h1>
      <div className={styles.actions}>
        <Button className={styles.actionButton} onClick={onPrev}>
          <img src={prev} alt='Previous Month' />
        </Button>
        <Button className={styles.actionButton} onClick={onNext}>
          <img src={next} alt='Next Month' />
        </Button>
      </div>
    </div>
  );
};

export default Header