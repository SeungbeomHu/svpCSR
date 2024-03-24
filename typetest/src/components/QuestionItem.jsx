import React from "react"

const QuestionItem = ({ data, onAnswer }) => {
  // 질문 및 답변 데이터
  const question = data.question
  const firstOption = data.answers[0]
  const secondOption = data.answers[1]

  return (
    <div>
      <p>{question}</p>
      <button onClick={() => onAnswer(firstOption.type)}>
        {firstOption.text}
      </button>
      <button onClick={() => onAnswer(secondOption.type)}>
        {secondOption.text}
      </button>
    </div>
  )
}

export default QuestionItem
