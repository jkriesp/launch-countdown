interface CounterDisplayProps {
  value: number;
  type: string;
}

const CountdownDisplay = ({ value, type }: CounterDisplayProps) => {
  return (
    <div className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default CountdownDisplay;