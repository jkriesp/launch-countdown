import SocialButtons from './components/SocialButtons';
import './App.css'
import HillsFooter from './components/HillsFooter';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const EIGHT_DAYS_IN_MS = 9 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterEIghtDays = NOW_IN_MS + EIGHT_DAYS_IN_MS;
  return (
    <>
      <div id='background-wrapper'>
        <div id='stars'></div>
        <HillsFooter />
      </div>
      <div>
        <h1 className='titleMessage'>We're launching soon</h1>
        <CountdownTimer targetDate={dateTimeAfterEIghtDays} />
        <SocialButtons />

      </div>


    </>
  )
}

export default App
