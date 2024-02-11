interface CounterDisplayProps {
  value: number;
  type: string;
}

const CountdownDisplay = ({ value, type }: CounterDisplayProps) => {
  const topValue = value; // This could be adjusted to show the next value for animation
  const bottomValue = value; // todo: top and bottom values for animation
  const formattedValue = formatNumber(value); // formatt values so that they are always 2 digits long

  function formatNumber(number: number) {
    // Check if the number is less than 10 and prepend a '0' if it is
    return number < 10 ? `0${number}` : number.toString();
  }

  return (
    <div className="countdown">
      <div className="numberCard">
        <div className="number">{formattedValue}</div>
        <div className="half top"></div>
        <div className="half bottom"></div>
      </div>
      <span className="timeType">{type}</span>
    </div>
  );
};


export default CountdownDisplay;