import styles from './styles.module.scss';
import Calendar from '../calendar';

const Sidebar = ({ selectedDate, onSelect }) => {
  return (
    <div className={styles.sidebar}>
      <Calendar selectedDate={selectedDate} onSelect={onSelect}></Calendar>
    </div>
  );
};

export default Sidebar;
