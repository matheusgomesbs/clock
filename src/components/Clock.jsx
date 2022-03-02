import React from 'react';

import { Clock } from './Clock.styles';

export default function App() {
  const date = new Date();
  const [dateTime, setDateTime] = React.useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [dateTime]);

  return (
    <Clock>
      <span className="flip">{dateTime.hours.toString().padStart(2, '0')}</span>
      <span>{dateTime.minutes.toString().padStart(2, '0')}</span>
    </Clock>
  );
}
