import React from "react"
import { Container } from "../styles/GlobalStyles"
import {
  AnswerBox,
  Question,
  QuestionNumber,
} from "../styles/QuestionPageStyles"

const QuestionItem = ({ data, onAnswer, currentQuestionNumber }) => {
  // 질문 및 답변 데이터
  const question = data.question
  const firstAnswer = data.answers[0]
  const secondAnswer = data.answers[1]

  return (
    <Container>
      <QuestionNumber>Q{currentQuestionNumber + 1}</QuestionNumber>
      <Question>{question}</Question>
      <AnswerBox onClick={() => onAnswer(firstAnswer.type)}>
        {firstAnswer.text}
      </AnswerBox>
      <AnswerBox onClick={() => onAnswer(secondAnswer.type)}>
        {secondAnswer.text}
      </AnswerBox>
    </Container>
  )
}

export default QuestionItem
