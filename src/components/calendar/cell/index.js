import { useContext } from 'react';
import classNames from 'classnames';

import { CalendarContext } from '..';
import styles from './styles.module.scss';

const CalendarCell = ({ isWeekday, isRange, isInRange, day, onSelect }) => {
  const { currentDate, selectedDate, displayMonth, displayYear } = useContext(CalendarContext);
  const dayText = isWeekday ? day : day.getDate();
  const isCurrent = !isWeekday
    ? day.getTime() === currentDate.getTime()
    : false;
  const isPresent = !isWeekday
    ? day.getMonth() === displayMonth &&
      day.getFullYear() === displayYear
    : false;
  const isSelected = !isWeekday && selectedDate && (selectedDate.getTime() === day.getTime())

  const handleOnSelect = () => isWeekday ? null : onSelect(day);

  return (
    <span
      className={classNames({
        [styles.cell]: true,
        [styles.current]: isCurrent,
        [styles.weekday]: isWeekday,
        [styles.days]: isPresent,
        [styles.selected]: !isCurrent && isSelected,
        [styles.range]: isRange,
        [styles.inRange]: isInRange,
      })}
      onClick={handleOnSelect}
    >
      {dayText || ''}
    </span>
  );
};

export default CalendarCell;
