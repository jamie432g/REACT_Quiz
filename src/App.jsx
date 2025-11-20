import { useState } from 'react'
import qLogo from '/logo.svg'
import './App.css'
import Quiz from './components/Quiz'

function App() {
  const [quizStart, setQuizStarted] = useState(false)

  const hasStarted = () => {
    setQuizStarted(true)
  };

  if (quizStart){
    return <Quiz />
  };


  return (
    <>
      <div>
        <img src={qLogo} className="logo" alt="Q logo" />
      </div>
      <h1>Quiz Game</h1>
      <div className="card">
        <button onClick={hasStarted}>
          START
        </button>
      </div>
    </>
  )
}

export default App
