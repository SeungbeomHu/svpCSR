import { motion } from "framer-motion"
import React from "react"
import {
  AnswerBox,
  ButtonContainer,
  Question,
  QuestionItemContainer,
  QuestionNumber,
} from "../styles/QuestionPageStyles"

const QuestionItem = ({ data, onAnswer, currentQuestionNumber }) => {
  const question = data.question

  const handleAnswerClick = (answer) => {
    onAnswer(answer.type)
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  }

  return (
    <QuestionItemContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <QuestionNumber as={motion.div} variants={itemVariants}>
        Q{currentQuestionNumber + 1}.
      </QuestionNumber>
      <Question as={motion.p} variants={itemVariants}>
        {question}
      </Question>
      <ButtonContainer as={motion.div}>
        {data.answers.map((answer, index) => (
          <AnswerBox
            key={index}
            as={motion.div}
            variants={itemVariants}
            onClick={() => handleAnswerClick(answer)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {answer.text}
          </AnswerBox>
        ))}
      </ButtonContainer>
    </QuestionItemContainer>
  )
}

export default QuestionItem
