import { useState } from 'react';

import Header from './components/header';
import './App.scss';
import Main from './components/main';

function App() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleOnSelect = (date) => {
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
  };

  return (
    <div className='App'>
      <Header />
      <Main selectedDate={selectedDate} onSelect={handleOnSelect} />
    </div>
  );
}

export default App;
