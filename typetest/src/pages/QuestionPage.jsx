import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import QuestionItem from "../components/QuestionItem"
import questions from "../data/questions"

const QuestionPage = () => {
  const navigate = useNavigate()

  // 유형 상태 관리
  const [types, setTypes] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
  })

  // 질문 번호
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // 답변 처리 함수
  const handleAnswer = (type) => {
    // 유형 카운트 상태 업데이트
    setTypes((prevTypes) => ({
      ...prevTypes,
      [type]: prevTypes[type] + 1,
    }))

    // 다음 질문으로 넘김
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // 테스트 완료 시 결과 페이지로 이동
      navigate("/result", { state: { types } }) // 결과 상태와 함께 navigate
    }
  }

  return (
    <>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <QuestionItem
          key={currentQuestionIndex}
          data={questions[currentQuestionIndex]} // 현재 질문
          currentQuestionNumber={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}
    </>
  )
}

export default QuestionPage
