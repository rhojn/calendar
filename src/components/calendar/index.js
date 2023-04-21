import classNames from 'classnames';

import styles from './styles.module.css';
import Header from '../header';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarCell = ({ day, current, range, onSelect }) => {
  console.log(range);
  const isDay = day && day instanceof Date;
  const dayText = isDay ? day.getDate() : day;
  const isCurrent = isDay && day.getTime() === current.getTime();
  const hasRange = range && range[0] && range[1];
  const isRange =
    isDay &&
    ((range[0] && day.getTime() === range[0].getTime()) ||
      (range[1] && day.getTime() === range[1].getTime()));
  const isInRange =
    isDay &&
    hasRange &&
    day.getTime() > range[0].getTime() &&
    day.getTime() < range[1].getTime();
  const handleOnSelect = () => (isDay ? onSelect(day) : null);
  return (
    <span
      className={classNames({
        [styles['calendar-cell']]: true,
        [styles['calendar-current']]: isCurrent,
        [styles['calendar-cell-days']]: isDay,
        [styles['calendar-cell-range']]: isRange,
        [styles['calendar-cell-in-range']]: isInRange,
      })}
      onClick={handleOnSelect}
    >
      {dayText || ''}
    </span>
  );
};

const Calendar = ({
  currentDate,
  displayMonth,
  displayYear,
  range,
  onNext,
  onPrev,
  onSelect,
}) => {
  const nextMonth = new Date(displayYear, displayMonth + 1, 0);

  const startDay = new Date(displayYear, displayMonth, 1);

  const totalDays = nextMonth.getDate();
  const padding = startDay.getDay();
  return (
    <div className={styles.calendar}>
      <Header
        month={MONTHS[displayMonth]}
        year={displayYear}
        onNext={onNext}
        onPrev={onPrev}
      />
      <div className={styles['calendar-weekdays']}>
        {WEEKDAYS.map((i, index) => (
          <CalendarCell day={i} key={index} />
        ))}
      </div>
      <div className={styles['calendar-content']}>
        {Array.from(Array(padding)).map((_, index) => (
          <CalendarCell key={index} />
        ))}
        {Array.from(Array(totalDays)).map((_, index) => (
          <CalendarCell
            day={new Date(displayYear, displayMonth, index + 1)}
            current={currentDate}
            range={range}
            onSelect={onSelect}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
