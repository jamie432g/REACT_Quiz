import { useState } from "react"
import questions from '../data/questions.json'
import End from './End'
import Quizcard from './Quizcard.jsx'

export default function Quiz() {
    const [stage,setStage] = useState("stage1")
    const [score,setScore] = useState(0)
    const [done, setDone] = useState(false)
    const Stages = ["stage1","stage2","stage3","stage4","stage5","stage6","stage7","stage8","stage9","stage10"]

    const allQuestions = questions[stage]
    const entries = Object.entries(allQuestions)
    const randomIndex = Math.floor(Math.random() * (entries.length))
    const [question, answer] = entries[randomIndex]
    function hasSelection(choice){
        if (choice == answer[0]){
            const newScore = score + 1
            
            setScore(newScore)
            if (newScore < Stages.length){
                setStage(Stages[newScore])
            }
            else{
                setDone(true)
            }
            
        }
        else{
            setDone(true)
        }

    }
    if (done){
        return <End 
        score = {score}/>
    }
  return (<Quizcard
    question = {question} 
    answers = {answer} 
    onSelect = {hasSelection}/>
  )
};
