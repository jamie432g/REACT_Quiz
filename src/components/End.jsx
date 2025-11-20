import { useState } from 'react';
import App from '../App.jsx'

const End = ({score}) => {
  const [retry, hasRetry] = useState(false)
  const [ended, hasEnded] = useState(false)
  if (ended){
  window.close()
  }
  if (retry){
    return <App />
  }

  return (
    <div>
      <h2>Game Done</h2> 
      <h1>Score: {score}</h1>
      <button className='retry'
        onClick={() => hasRetry(true)}
    >
        RETRY
    </button>
    <button className='finished'
        onClick={() => hasEnded(true)}
    >
        End
    </button>
    </div>
  );
};

export default End;
