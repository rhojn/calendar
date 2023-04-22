import styles from './styles.module.scss';
import Sidebar from '../sidebar';
import Events from '../events';

const Main = ({ selectedDate, events, addEvent, deleteEvent, onSelect }) => {

  return (
    <main className={styles.main}>
      <Sidebar selectedDate={selectedDate} onSelect={onSelect} />
      <Events selectedDate={selectedDate} events={events} onSelect={onSelect} />
    </main>
  );
};

export default Main;
