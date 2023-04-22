import { useState } from 'react';
import styles from './styles.module.scss';
import Header from './header';
import DayView from './views/day';

const Events = ({ selectedDate, events, addEvent, deleteEvent, onSelect }) => {
  const [viewType, setViewType] = useState('day');

  const filteredEvents = events.filter((item) => {
    const start = new Date(item.start);
    const end = new Date(item.end);
    start.setHours(0, 0, 0);
    end.setHours(0, 0, 0);
    return (
      selectedDate.getTime() >= start.getTime() &&
      selectedDate.getTime() <= end.getTime()
    );
  });

  const handleOnNext = () => {
    const newDate = new Date(selectedDate.getTime());
    newDate.setDate(newDate.getDate() + 1);
    onSelect(newDate);
  };

  const handleOnPrev = () => {
    const newDate = new Date(selectedDate.toISOString());
    newDate.setDate(newDate.getDate() - 1);
    onSelect(newDate);
  };

  return (
    <div className={styles.events}>
      <Header
        selectedDate={selectedDate}
        onNext={handleOnNext}
        onPrev={handleOnPrev}
      />
      {viewType === 'day' ? <DayView events={filteredEvents} /> : null}
    </div>
  );
};

export default Events;
