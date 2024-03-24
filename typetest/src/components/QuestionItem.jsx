import React from "react"

const QuestionItem = ({ data, onAnswer }) => {
  const question = data.question
  const firstOption = data.answers[0]
  const secondOption = data.answers[1]

  return (
    <div>
      <p>{question}</p>
      <button onClick={onAnswer}>{firstOption.text}</button>
      <button onClick={onAnswer}>{secondOption.text}</button>
    </div>
  )
}

export default QuestionItem
