import { createContext, useState, useMemo } from 'react';
import styles from './styles.module.scss';
import Header from './header';
import Cell from './cell';

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

export const CalendarContext = createContext(null);

const Calendar = ({ selectedDate, range, onSelect }) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());
  const [displayYear, setDisplayYear] = useState(new Date().getFullYear());
  const prevMonth = new Date(displayYear, displayMonth, 0);
  const currentMonth = new Date(displayYear, displayMonth + 1, 0);
  const nextMonth = new Date(displayYear, displayMonth + 1, 1);
  const startDay = new Date(displayYear, displayMonth, 1);
  const totalDays = currentMonth.getDate();
  const startPadding = startDay.getDay();
  const totalDayCells = startPadding + totalDays;
  const endPadding = 42 - totalDayCells;

  useMemo(() => {
    setDisplayMonth(selectedDate.getMonth());
    setDisplayYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const handleOnNext = () => {
    const month = displayMonth + 1;

    if (month > 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(month);
    }
  };

  const handleOnPrev = () => {
    const month = displayMonth - 1;

    if (month <= 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(month);
    }
  };

  return (
    <CalendarContext.Provider
      value={{ currentDate, selectedDate, displayMonth, displayYear }}
    >
      <div className={styles.calendar}>
        <Header
          month={MONTHS[displayMonth]}
          year={displayYear}
          onNext={handleOnNext}
          onPrev={handleOnPrev}
        />
        <div className={styles['calendar-weekdays']}>
          {WEEKDAYS.map((i, index) => (
            <Cell isWeekday day={i} key={index} />
          ))}
        </div>
        <div className={styles['calendar-content']}>
          {Array.from(Array(startPadding)).map((_, index) => (
            <Cell
              key={index}
              day={
                new Date(
                  prevMonth.getFullYear(),
                  prevMonth.getMonth(),
                  prevMonth.getDate() - (startPadding - (index + 1))
                )
              }
              current={currentDate}
              range={range}
              onSelect={onSelect}
            />
          ))}
          {Array.from(Array(totalDays)).map((_, index) => (
            <Cell
              day={new Date(displayYear, displayMonth, index + 1)}
              current={currentDate}
              range={range}
              onSelect={onSelect}
              key={index}
            />
          ))}
          {Array.from(Array(endPadding)).map((_, index) => (
            <Cell
              key={index}
              day={
                new Date(
                  nextMonth.getFullYear(),
                  nextMonth.getMonth(),
                  index + 1
                )
              }
              current={currentDate}
              range={range}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
