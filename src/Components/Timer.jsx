import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = new Date("2024-02-27T00:00:00Z"); // Change this to your desired target date
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
    <div>
      <div className="flex justify-center items-center space-x-3">
        <div className="border h-8 flex items-center justify-center px-2 rounded max-w-[2.6rem] w-full">
          <p className="text-base font-bold lh-1">{timeLeft.days}</p>
        </div>
        <div className="border h-8 flex items-center justify-center px-2 rounded max-w-[2.6rem] w-full">
          <p className="text-base font-bold lh-1">{timeLeft.hours}</p>
        </div>
        <div className="border h-8 flex items-center justify-center px-2 rounded max-w-[2.6rem] w-full">
          <p className="text-base font-bold lh-1">{timeLeft.minutes}</p>
        </div>
        <div className="border h-8 flex items-center justify-center px-2 rounded max-w-[2.6rem] w-full">
          <p className="text-base font-bold lh-1">{timeLeft.seconds}</p>
        </div>
      </div>

      <div className="mt-1.5 flex items-center justify-center space-x-3 [&>*]:max-w-[2.6rem] [&>*]:w-full text-center opacity-90">
        <div className="text-xs uppercase">DAYS</div>
        <div className="text-xs uppercase">HOURS</div>
        <div className="text-xs uppercase">MIN</div>
        <div className="text-xs uppercase">SEC</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
