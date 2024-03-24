import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import QuestionItem from "../components/QuestionItem"
import questions from "../data/questions"

const QuestionPage = () => {
  const navigate = useNavigate()

  // 질문 번호
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // 다음 질문으로 넘어가는 함수
  const handleAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // 테스트 완료
      navigate("/result")
    }
  }

  return (
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <QuestionItem
          key={currentQuestionIndex}
          data={questions[currentQuestionIndex]} // 현재 질문
          onAnswer={handleAnswer}
        />
      )}
    </div>
  )
}

export default QuestionPage
