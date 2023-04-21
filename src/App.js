import { useState } from 'react';

import Calendar from './components/calendar';
import './App.css';

function App() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());
  const [displayYear, setDisplayYear] = useState(new Date().getFullYear());

  // Range
  const [[startDate, endDate], setRange] = useState([null, null]);

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

  const handleOnSelect = (date) => {
    if (!startDate && !endDate) {
      setRange([date, endDate]);
    }

    if (startDate && !endDate) {
      setRange([startDate, date]);
    }

    if (!startDate && endDate) {
      setRange([date, endDate]);
    }

    if (startDate && startDate.getTime() === date.getTime()) {
      setRange([null, endDate]);
    }

    if (endDate && endDate.getTime() === date.getTime()) {
      setRange([startDate, null]);
    }

    if (
      startDate &&
      endDate &&
      date.getTime() > startDate.getTime() &&
      date.getTime() < endDate.getTime()
    ) {
      setRange([date, endDate]);
    }

    if (startDate && date.getTime() < startDate.getTime()) {
      setRange([date, startDate]);
    }

    if (endDate && date.getTime() > endDate.getTime()) {
      setRange([endDate, date]);
    }
  };

  return (
    <div className='App'>
      <Calendar
        currentDate={currentDate}
        displayMonth={displayMonth}
        displayYear={displayYear}
        onNext={handleOnNext}
        onPrev={handleOnPrev}
        onSelect={handleOnSelect}
        range={[startDate, endDate]}
      ></Calendar>
    </div>
  );
}

export default App;
