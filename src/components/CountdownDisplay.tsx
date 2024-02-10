interface CounterDisplayProps {
  value: number;
  type: string;
}

const CountdownDisplay = ({ value, type }: CounterDisplayProps) => {
  const topValue = value; // This could be adjusted to show the next value for animation
  const bottomValue = value;

  return (
    <div className="countdown">
      <div className="numberCard">
        <div className="number">{topValue}</div>
        <div className="half top"></div>
        <div className="half bottom"></div>
      </div>
      <span className="timeType">{type}</span>
    </div>
  );
};


export default CountdownDisplay;