import React from "react"
import questions from "../data/questions"

const QuestionPage = () => {
  // 질문 및 답변 데이터
  const questionList = questions

  console.log(questionList)

  return (
    <div>
      <h1>질문 리스트</h1>
    </div>
  )
}

export default QuestionPage
