import { motion, useAnimation } from "framer-motion"
import React, { useState, useEffect } from "react"
import {
  AnswerBox,
  ButtonContainer,
  Question,
  QuestionItemContainer,
  QuestionNumber,
} from "../styles/QuestionPageStyles"

const QuestionItem = ({ data, onAnswer, currentQuestionNumber }) => {
  const question = data.question
  const [isAcitve, setIsAcitve] = useState(false) // 선택지 클릭 가능 상태
  const controls = useAnimation() // 애니메이션 컨트롤러

  useEffect(() => {
    const sequence = async () => {
      await controls.start("show")
      setIsAcitve(true) // 애니메이션이 끝나면 클릭 가능 상태 활성화
    }
    sequence()
  }, [controls])

  const handleAnswerClick = (answer) => {
    if (isAcitve) {
      // 클릭이 가능한 경우에만 onAnswer 호출
      onAnswer(answer.type)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
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
      animate={controls}
    >
      {/* <QuestionNumber as={motion.div} variants={itemVariants}>
        Q{currentQuestionNumber + 1}.
      </QuestionNumber> */}
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
            whileHover={{ scale: isAcitve ? 1.05 : 1 }}
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
