import { useState, useEffect } from "react"
import './Quizcard.css'
function Quizcard({question, answers, onSelect}){
    const [shuffledAnswers, setShuffledAnswers] = useState([])

    useEffect(() => {
        const shuffled = [...answers].sort(() => Math.random() - 0.5)
        setShuffledAnswers(shuffled)}, [question,answers])

    return (
        <div className="card">
            <h2 className="question">{question}</h2>

            <div className="buttons">
                {shuffledAnswers.map((ans, idx) => (
                    <button
                        key={idx}
                        className="answer-button"
                        onClick={() => onSelect(ans)}
                    >
                        {ans}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Quizcard