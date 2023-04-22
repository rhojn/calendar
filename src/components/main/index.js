import styles from './styles.module.scss';
import Sidebar from '../sidebar';

const Main = ({ selectedDate, onSelect }) => {
  return (
    <main className={styles.main}>
      <Sidebar selectedDate={selectedDate} onSelect={onSelect} />
      <div class={styles.events}>
        <div className={styles.topBar}>
          <h1>{selectedDate.toDateString()}</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
