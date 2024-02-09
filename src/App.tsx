import SocialButtons from './components/SocialButtons';
import './App.css'
import HillsFooter from './components/HillsFooter';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const EIGHT_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterEIghtDays = NOW_IN_MS + EIGHT_DAYS_IN_MS;
  return (
    <>
      <div>
        <h1>We're launching soon</h1>
        <CountdownTimer targetDate={dateTimeAfterEIghtDays} />
        <SocialButtons />
        <HillsFooter />
      </div>

    </>
  )
}

export default App
