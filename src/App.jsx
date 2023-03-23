import { useState } from 'react'
import './css/style.css'

function App() {
  const [state, setState] = useState({
    seconds: 0,
    isActive: false,
    intervalId: null
  });
  
  const startTimer = () => {
    const intervalId = setInterval(() => {
      setState(prevState => ({
        seconds: prevState.seconds + 1,
        isActive: true,
        intervalId: prevState.intervalId
      }))
    }, 1000)

    setState(prevState => ({
      ...prevState,
      isActive: true,
      intervalId
    }))
  };

  const stopTimer = () => {
    clearInterval(state.intervalId);
    setState(prevState => ({
      ...prevState,
      isActive: false,
      seconds: state.seconds
    }));
  };

  const resetTimer = () => {
    setState(prevState => ({
      seconds: 0,
      isActive: false,
      intervalId: null
    }))
  }

 

  return (
    <div className="App">
      <h1>StopWatch: {state.seconds}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  )
}

export default App
