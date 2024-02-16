import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = new Date('2024-02-27T00:00:00Z'); // Change this to your desired target date
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="m-2 p-2 border border-gray-300 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm font-semibold uppercase">DAYS</div>
          </div>
          <div className="m-2 p-2 border border-gray-300 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm font-semibold uppercase">HOURS</div>
          </div>
          <div className="m-2 p-2 border border-gray-300 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm font-semibold uppercase">MINUTES</div>
          </div>
          <div className="m-2 p-2 border border-gray-300 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm font-semibold uppercase">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
