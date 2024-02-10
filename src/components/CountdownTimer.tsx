import { useCountdown } from "../hooks/useCountdown";
import CountdownDisplay from "./CountdownDisplay";

// TypeScript to bind types
interface ShowCounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: number;
}

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className="show-counter">

      <CountdownDisplay value={days} type={'Days'} />

      <CountdownDisplay value={hours} type={'Hours'} />

      <CountdownDisplay value={minutes} type={'Mins'} />

      <CountdownDisplay value={seconds} type={'Seconds'} />

    </div>
  );
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps ) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    console.log("We're out of time.");
  } else {
    return (
      <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

export default CountdownTimer;